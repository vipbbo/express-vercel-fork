var redirect = async function redirectToWeChat() {
    // 替换以下链接中的参数为实际值
    var appId = 'wx6361298f0e180aa1';
    var redirectUri = encodeURIComponent('https://wx.ibitly.cn/');
    var url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_base&state=1#wechat_redirect`;

    // 执行重定向
    window.location.href = url;
}

module.exports = redirect;

