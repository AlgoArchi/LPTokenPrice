/**
 * Perform a front-running attack on uniswap
*/
const path = require('path');
var express = require("express"), 
    app = express(), 
    bodyParser = require('body-parser'), 
    port = process.env["PORT"] || 8080; 
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 
app.post("/uniswap", async function(req, res, next) { 
    
    var result = await uniswap();
    // console.log(res);
    if(result.length > 0)
        res.send(result); 
}); 
app.post("/pancakeswap", async function(req, res, next) { 
   
    var result_pancake = await pancakeswap();
    if(result_pancake.length > 0)
        res.send(result_pancake); 
}); 
 
app.listen(port) 
console.log("listening to server on port:", port); 

var Web3 = require('web3');
var abiDecoder = require('abi-decoder');
var colors = require("colors");
var Tx = require('ethereumjs-tx').Transaction;
var axios = require('axios');
var bignumber = require('big-number');
const CoinGecko = require('coingecko-api');

const {UNISWAP_ROUTER_ADDRESS, UNISWAP_FACTORY_ADDRESS,SAFE_MATH_ADDRESS, UNISWAP_V2ORACLE_ADDRESS,SAFE_MATH_ABI, UNISWAP_V2ORACLE_ABI, UNISWAP_ROUTER_ABI, UNISWAP_FACTORY_ABI, UNISWAP_POOL_ABI, HTTP_PROVIDER_LINK_UNISWAP, HTTP_PROVIDER_LINK_PANCAKE, PANCAKE_ROUTER_ADDRESS, PANCAKE_FACTORY_ADDRESS, PANCAKE_FACTORY_ABI, PANCAKE_POOL_ABI, PANCAKE_ROUTER_ABI} = require('./constants.js');

// const INPUT_TOKEN_ADDRESS = (NETWORK=='mainnet') ? '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2' : '0xc778417E063141139Fce010982780140Aa0cD5Ab';
// const WETH_TOKEN_ADDRESS = (NETWORK=='mainnet') ? '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2' : '0xc778417E063141139Fce010982780140Aa0cD5Ab';

//uniswap
var web3;
var uniswapRouter;
var uniswapFactory;
var uniswap_v2oracle;

var DAI_add = '0x6b175474e89094c44da98b954eedeac495271d0f';
var WETH_add = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
var BTC_add = '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599';
var USDT_add = '0xdac17f958d2ee523a2206206994597c13d831ec7';

//pancakeswap
var web3_pancake;
var pancakeRouter;
var pancakeFactory;

var WBNB_add = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
var BETH_add = '0x2170ed0880ac9a755fd29b2688956bd959f933f8';
var BUSD_add = '0x55d398326f99059ff775485246999027b3197955';
var BBTC_add = '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c';

//compound
var cBAT_add = '0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e';
var cCOMP_add = '0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4';
var cDAI_add = '0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4';
var cETH_add = '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5';
var cUNI_add = '0x35a18000230da775cac24873d00ff85bccded550';
var cUSDT_add = '0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9';
var cTUSD_add = '0x12392f67bdf24fae0af363c24ac620a2f67dad86';
var cUSDC_add = '0x39aa39c021dfbae8fac545936693ac917d5e7563';

async function createWeb3(){
    try {
        web3 = new Web3(new Web3.providers.HttpProvider(HTTP_PROVIDER_LINK_UNISWAP));
        uniswapRouter = new web3.eth.Contract(UNISWAP_ROUTER_ABI, UNISWAP_ROUTER_ADDRESS);
        uniswapFactory = new web3.eth.Contract(UNISWAP_FACTORY_ABI, UNISWAP_FACTORY_ADDRESS);
        uniswap_v2oracle = new web3.eth.Contract(UNISWAP_V2ORACLE_ABI, UNISWAP_V2ORACLE_ADDRESS);
        abiDecoder.addABI(UNISWAP_ROUTER_ABI);

        return true;
    } catch (error) {
      console.error(error);
      return false;
    }
}

async function createWeb3_pancakeswap(){
    try {
        web3_pancake = new Web3(new Web3.providers.HttpProvider(HTTP_PROVIDER_LINK_PANCAKE));
        pancakeRouter = new web3_pancake.eth.Contract(PANCAKE_ROUTER_ABI, PANCAKE_ROUTER_ADDRESS);
        pancakeFactory = new web3_pancake.eth.Contract(PANCAKE_FACTORY_ABI, PANCAKE_FACTORY_ADDRESS);
        abiDecoder.addABI(PANCAKE_ROUTER_ABI);

        return true;
    } catch (error) {
      console.log(error);
      return false;
    }
}

async function uniswap() {
    try {   
        var ret = await createWeb3();
        var result = new Array;
        var token_pair_length = await uniswapFactory.methods.allPairsLength().call();
        console.log(token_pair_length);
        for (var i = 0; i < token_pair_length; i++) {
            var token_pair = await uniswapFactory.methods.allPairs(i).call();
            if(token_pair == '0x0000000000000000000000000000000000000000')
                continue;
            console.log('***** Token pair address = '+token_pair+' *****');
            var price = await handleLPTokenPrice_uniswap(token_pair);
            if (price == 0)
                continue;

            console.log(price);
            result.push(price);
        }
        return result;
        // console.log('Price:',price);
        // return [token_pair, price];
        // var adr = await web3.utils.toChecksumAddress('0xad6d458402f60fd3bd25163575031acdce07538d');
        // console.log('checked', adr);
        
    } catch (error) {
      
      if(error.data != null && error.data.see === 'https://infura.io/dashboard')
      {
         console.log('Daily request count exceeded, Request rate limited'.yellow);
         console.log('Please insert other API Key');
      }else{
         console.log('Unknown Handled Error');
         console.log(error);
      } 

      process.exit();
    }
}

// async function curve() {
//     try {   
//         var ret = await createWeb3();
       
//         var token_pair = await uniswapFactory.methods.getPair('0x6B175474E89094C44Da98b954EedeAC495271d0F', '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599').call();
//         console.log('***** DAI/USDT Token pair address = '+token_pair+' *****');
//         var price = await handleLPTokenPrice_uniswap(token_pair,WETH_add,USDT_add);
//         console.log('DAI/USDT Price:',price);

//         // var adr = await web3.utils.toChecksumAddress('0xad6d458402f60fd3bd25163575031acdce07538d');
//         // console.log('checked', adr);
        
//     } catch (error) {
      
//       if(error.data != null && error.data.see === 'https://infura.io/dashboard')
//       {
//          console.log('Daily request count exceeded, Request rate limited'.yellow);
//          console.log('Please insert other API Key');
//       }else{
//          console.log('Unknown Handled Error');
//          console.log(error);
//       } 

//       process.exit();
//     }
// }


async function pancakeswap() {
    try {   
        var ret = await createWeb3_pancakeswap();
        var result = new Array;
        var token_pair_length = await pancakeFactory.methods.allPairsLength().call();
        console.log(token_pair_length);
        for (var i = 0; i < token_pair_length; i++) {
            var token_pair = await pancakeFactory.methods.allPairs(i).call();
            if(token_pair == '0x0000000000000000000000000000000000000000')
                continue;
            console.log('***** Token pair address = '+token_pair+' *****');
            var price = await handleLPTokenPrice_pancakeswap(token_pair);
            if (price == 0)
                continue;

            console.log(price);
            result.push(price);
        }
        return result;
        
    } catch (error) {
      
      if(error.data != null && error.data.see === 'https://infura.io/dashboard')
      {
         console.log('Daily request count exceeded, Request rate limited'.yellow);
         console.log('Please insert other API Key');
      }else{
         console.log('Unknown Handled Error');
         console.log(error);
      } 

      process.exit();
    }
}

async function handleLPTokenPrice_uniswap(token) {
    var price;
    var symbol_1;
    var symbol_2;
    await axios.post('https://api.etherscan.io/api?module=contract&action=getabi&address='+token+'&apikey=54FH28C7JIY1IH3TP5KSCG68P35IFQTNKU')
            .then(async function(response){
            var contractABI = response.data.result;
            var contract_token_pair = new web3.eth.Contract(JSON.parse(contractABI), token);
    var reserves = await contract_token_pair.methods.getReserves().call();
    var token0 = await contract_token_pair.methods.token0().call();
    var token1 = await contract_token_pair.methods.token1().call();
    var total_supply = await contract_token_pair.methods.totalSupply().call();
    var first_token_contract;
    var second_token_contract;
    // token0 = await web3.utils.toChecksumAddress(token0);
    // token1 = await web3.utils.toChecksumAddress(token1);
    // console.log(token0,token1);
    var first_decimal;
    var second_decimal;
    await axios.post('https://api.etherscan.io/api?module=contract&action=getabi&address='+token0+'&apikey=54FH28C7JIY1IH3TP5KSCG68P35IFQTNKU')
        .then(async function(response){
            if (response.data.status == '0') {
                return 0
            }
            first_token_contract = new web3.eth.Contract(JSON.parse(response.data.result), token0);
            if (typeof first_token_contract.methods.decimals === "function") { 
                first_decimal = await first_token_contract.methods.decimals().call();
                symbol_1 = await first_token_contract.methods.symbol().call();
            }
            else
                return 0
        });
    await axios.post('https://api.etherscan.io/api?module=contract&action=getabi&address='+token1+'&apikey=54FH28C7JIY1IH3TP5KSCG68P35IFQTNKU')
        .then(async function(response){
            if (response.data.status == '0') {
                return 0
            }
            second_token_contract = new web3.eth.Contract(JSON.parse(response.data.result), token1);
            if (typeof second_token_contract.methods.decimals === "function") { 
                second_decimal = await second_token_contract.methods.decimals().call();
                symbol_2 = await second_token_contract.methods.symbol().call();
            }
            else
                return 0
        });
    const CoinGeckoClient = new CoinGecko();
    var first_res = await CoinGeckoClient.coins.fetchCoinContractInfo(token0);
    var first_token_id = first_res.data.id;
    var second_res = await CoinGeckoClient.coins.fetchCoinContractInfo(token1);
    var second_token_id = second_res.data.id;
    var data = await CoinGeckoClient.simple.price({
        ids: [first_token_id,second_token_id],
        vs_currencies: ['usd'],
    });
    var first_reserves = reserves['0']/bignumber(10).power(first_decimal);
    var second_reserves = reserves['1']/bignumber(10).power(second_decimal);
    // console.log('reserve value of token0:',first_reserves,'reserve value of token0:',second_reserves);
    // console.log('token0 address of pair:',token0,'token1 address of pair:',token1,total_supply);
    // price = ((first_reserves*Number(data.data[first_token_id].usd))+(second_reserves*Number(data.data[second_token_id].usd)))/total_supply*bignumber(10).power(18);
    if (typeof data.data[first_token_id] !='undefined' && typeof data.data[second_token_id] != 'undefined'){
        price = 2*Math.sqrt(Number(data.data[first_token_id].usd)*Number(data.data[second_token_id].usd)*first_reserves*second_reserves)/total_supply*bignumber(10).power(18);
    }
    else 
        return 0
    // price = 2*Math.sqrt(Number(data.data[first_token_id].usd)*Number(data.data[second_token_id].usd)*first_reserves*second_reserves)/total_supply*bignumber(10).power(18);
    });
    return [token, symbol_1, symbol_2, price];
}

async function handleLPTokenPrice_pancakeswap(token) {
    var price;
    var symbol_1;
    var symbol_2;
    await axios.post('https://api.bscscan.com/api?module=contract&action=getabi&address='+token+'&apikey=73PV1PKUAPIFDPT34N8U1SMITGB5ANE74R')
            .then(async function(response){
            var contractABI = response.data.result;
            var contract_token_pair = new web3_pancake.eth.Contract(JSON.parse(contractABI), token);
    var reserves = await contract_token_pair.methods.getReserves().call();
    var token0 = await contract_token_pair.methods.token0().call();
    var token1 = await contract_token_pair.methods.token1().call();
    var total_supply = await contract_token_pair.methods.totalSupply().call();
    var first_token_contract;
    var second_token_contract;
    var first_decimal;
    var second_decimal;
    await axios.post('https://api.bscscan.com/api?module=contract&action=getabi&address='+token0+'&apikey=73PV1PKUAPIFDPT34N8U1SMITGB5ANE74R')
        .then(async function(response){
            if (response.data.status == '0') {
                return 0
            }
            first_token_contract = new web3_pancake.eth.Contract(JSON.parse(response.data.result), token0);
             if (typeof first_token_contract.methods.decimals === "function") { 
                first_decimal = await first_token_contract.methods.decimals().call();
                symbol_1 = await first_token_contract.methods.symbol().call();
            }
            else
                return 0
        });
    await axios.post('https://api.bscscan.com/api?module=contract&action=getabi&address='+token1+'&apikey=73PV1PKUAPIFDPT34N8U1SMITGB5ANE74R')
        .then(async function(response){
            if (response.data.status == '0') {
                return 0
            }
            second_token_contract = new web3_pancake.eth.Contract(JSON.parse(response.data.result), token1);
            if (typeof second_token_contract.methods.decimals === "function") { 
                second_decimal = await second_token_contract.methods.decimals().call();
                symbol_2 = await second_token_contract.methods.symbol().call();
            }
            else
                return 0
        });
    var first_reserves = reserves['0']/bignumber(10).power(first_decimal);
    var second_reserves = reserves['1']/bignumber(10).power(second_decimal);

    const CoinGeckoClient = new CoinGecko();
    var first_res = await CoinGeckoClient.coins.fetchCoinContractInfo(token0, 'binance-smart-chain');
    var first_token_id = first_res.data.id;
    var second_res = await CoinGeckoClient.coins.fetchCoinContractInfo(token1, 'binance-smart-chain');
    var second_token_id = second_res.data.id;
    var data = await CoinGeckoClient.simple.price({
        ids: [first_token_id,second_token_id],
        vs_currencies: ['usd'],
    });
    if (typeof data.data[first_token_id] !='undefined' && typeof data.data[second_token_id] != 'undefined'){
        price = 2*Math.sqrt(Number(data.data[first_token_id].usd)*Number(data.data[second_token_id].usd)*first_reserves*second_reserves)/total_supply*bignumber(10).power(18);
    }
    else 
        return 0
    // price = ((first_reserves*Number(data.data[first_token_id].usd))+(second_reserves*Number(data.data[second_token_id].usd)))/total_supply*bignumber(10).power(18);
    });
    return [token, symbol_1, symbol_2, price];
}
// pancakeswap();