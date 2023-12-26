var {appid, secret} = require('../config')

// 通过命令 npm i axios 安装 axios
var axios = require('axios')

var sha1 = require('sha1')

// 获取access token的接口：https请求方式: GET https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET

// 获取ticket方法函数
async function getTicket() {
    let tokenUrl = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=$${secret}`
    let token_data = await axios.get(tokenUrl);
    console.log('token_data', token_data);

    let access_toekn = token_data.data.access_toekn; // 获取access_toekn
    // 参考官方文档：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62
    let ticketUrl = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_toekn}&type=jsapi`
    let ticket_data = await axios.get(ticketUrl); // 获取jsapi的ticket
    console.log('ticket_data', ticket_data);
    return ticket_data.data.ticket;
}

// 生成随机字符串
var createNonceStr = function() {
    return Math.random().toString(36).substring(2, 15);
}

// 生成时间戳
var createTimeStamp = function() {
    return parseInt(new Date().getTime() / 1000 + '');
}

// 处理数据格式的方法
var row = function(obj) {
    var keys = Object.keys(obj);
    keys = keys.sort(); // 字典排序
    var newObj = {};
    keys.forEach((key)=>{
        newObj[key] = obj[key]
    })

    var string = '';
    for(var k in newObj) {
        string += '&' + k + '=' + newObj[k]
    }
    string = string.substr(1);
    return string;
}



// 生成签名等数据信息的方法
var sign = async function(url) {
    let jsapi_ticket = await getTicket();
    var obj = {
        jsapi_ticket: jsapi_ticket,
        nonceStr: createNonceStr(),
        timestamp: createTimeStamp(),
        url
    }

    // 1. 签名生成规则如下：参与签名的字段包括noncestr（随机字符串）, 有效的jsapi_ticket, timestamp（时间戳）, 
    //      url（当前网页的URL，不包含#及其后面部分） 。
    // 2.对所有待签名参数按照字段名的ASCII 码从小到大排序（字典序）后，
    // 3.使用URL键值对的格式（即key1=value1&key2=value2…） 拼接成字符串string1。这里需要注意的是所有参数名均为小写字符。
    var str = row(obj);
    // 4.对string1作sha1加密，字段名和字段值都采用原始值，不进行URL 转义。
    var signature = sha1(str);
    obj.signature = signature;
    return obj;
}

module.exports = sign;