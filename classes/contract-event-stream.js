const {ethers} = require("ethers");

const INFURA_ID = "1eff72131d494f7d95ef6c57558cab47";
const provider = new ethers.providers.JsonRpcProvider(
  `https://ropsten.infura.io/v3/${INFURA_ID}`
);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",

  "event Transfer(address indexed from, address indexed to, uint amount)",
];

const address = "0x8e5af5b3eF5Cae28B772D927a6158cCE271261d8"; // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const block = await provider.getBlockNumber();

  const transferEvents = await contract.queryFilter(
    "Transfer",
    block - 1,
    block
  );
  console.log(transferEvents);
};

main();
