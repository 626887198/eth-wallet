
module.exports = {
    getweb3: () => {
        let net;
        net = 'https://rinkeby.infura.io/v3/32fcbba136c346708703f0b930cca26d';  //rinkeby测试网
        // net='https://mainnet.infura.io/v3/32fcbba136c346708703f0b930cca26d' //主网
        let Web3 = require("web3")
        var web3 = new Web3(Web3.givenProvider || net);
        return web3
    },

    success: (data) => {
        responseData = {
            code:0,
            status:"success",
            data:data
        }
        return responseData
    },

    fail: (msg) => {
        responseData = {
            code:1,
            status:"fail",
            msg:msg
        }
        return responseData
    }
}