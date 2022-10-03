const axios = require("axios");
const { ethers } = require("ethers");

 //"0xe34139463bA50bD61336E0c446Bd8C0867c6fE65"; //UniswapV3Staker (1.0.2)
 
export const getAbi = async (address) => {
  console.log("inside getABI")
  const apiKey = "1RB2PBRSVTZCSGBZENWT8RRU6EAJWQ53AT";
const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${apiKey}`;
const infuraUrl =
  "https://mainnet.infura.io/v3/cfa0a507834b44449f7e1547d1c62499";
  const res = await axios.get(url);
  const abi = JSON.parse(res.data.result);
  console.log(abi,'This is the ABI')
  const provider = new ethers.providers.JsonRpcProvider(infuraUrl);
  const contract = new ethers.Contract(address, abi, provider);
  let stakeFunctions = ["deposit","deposits","stake","enter","stakeOnUnifarm","lock","createLock","collateralize"];
  let i = 0;
  let k = 1;
  while (k < abi.length) {
    i = 0;
    while (i < stakeFunctions.length) {
      if (abi[k].name == stakeFunctions[i]) {
        console.log("abi[k].name ",abi[k].name);
        console.log("stakeFunctions",stakeFunctions[i] )
        let func = stakeFunctions[i];
        let inputs = abi[k].inputs;
        console.log(func);
        console.log("inputs",inputs);
      } else {
      }
      i++;
    }
    k++;
  }
};



// getAbi();
