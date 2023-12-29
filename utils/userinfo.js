var axios = require('axios')
var {appid, secret} = require('../config')

// 通过code换取网页授权access_token
var userAccessToken = async function userAccessToken(code) {
    // 替换以下链接中的参数为实际值
    var access_token_url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${code}&grant_type=authorization_code`;
    let access_token_data = await axios.get(access_token_url);
    console.log("access_token_data",access_token_data);
    let access_token = access_token_data.access_token;
    let openid = access_token_data.openid;

    // 拉取用户信息
    let user_info_url = `https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN`;
    console.log("user_info_url",user_info_url);
    return access_token_data;
}


module.exports = userAccessToken;