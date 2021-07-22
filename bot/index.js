console.log('BOT!')
let btc= require('./btcusdt')
const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: 'W4FF6mnDcuN7TgGN3h5R5VgZFuSm4XylMZH3nLIcR0pJYJXoPnavskCoe44YNFtF',
  APISECRET: 'eeIc0m32i2AmoYH0SEcgYPi6BhD2KJzkYoiMsLBZbm5VZA3ETMFwSsbFSfv4aZFN'
});
//let r = binance.futuresBalance().then(r=> console.log(r))
console.log(btc.btc)