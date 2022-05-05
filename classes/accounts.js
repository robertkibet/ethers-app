const {ethers} = require("ethers");
const INFURA_ID = "1eff72131d494f7d95ef6c57558cab47";

const provider = new ethers.providers.JsonRpcProvider(
  `https://ropsten.infura.io/v3/${INFURA_ID}`
);

const getBalance = async () => {
  const balance = await provider.getBalance(
    "0x8e5af5b3eF5Cae28B772D927a6158cCE271261d8"
  );
  console.log("balance", ethers.utils.formatEther(balance), "ETH");
  return balance;
};
getBalance();
