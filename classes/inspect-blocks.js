const {ethers} = require("ethers");

const INFURA_ID = "1eff72131d494f7d95ef6c57558cab47";

const provider = new ethers.providers.JsonRpcProvider(
  `https://ropsten.infura.io/v3/${INFURA_ID}`
);

const main = async () => {
  const block = await provider.getBlockNumber();

  console.log(`\nBlock Number: ${block}\n`);

  const blockInfo = await provider.getBlock(block);

  console.log(blockInfo);

  const {transactions} = await provider.getBlockWithTransactions(block);

  console.log(`\nLogging first transaction in block:\n`);
  console.log(transactions[0]);
};

main();
