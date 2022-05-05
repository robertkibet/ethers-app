const {ethers} = require("ethers");
const INFURA_ID = "1eff72131d494f7d95ef6c57558cab47";
const mainNetAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

const provider = new ethers.providers.JsonRpcProvider(
  `https://ropsten.infura.io/v3/${INFURA_ID}`
);
const sender = "0x8e5af5b3eF5Cae28B772D927a6158cCE271261d8";
const receiver = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const privateKey = process.env.ETHEREUM_TESTNET_PRIVATE_KEY;

const wallet = new ethers.Wallet(privateKey, provider);

const main = async () => {
  //show recepient balance before transfer
  const recepientInitialBalance = await provider.getBalance(receiver);
  console.log(
    "recepientInitialBalance",
    ethers.utils.formatEther(recepientInitialBalance),
    "ETH"
  );

  // show sender balance before transfer
  const senderInitialBalance = await provider.getBalance(sender);
  console.log(
    "senderInitialBalance",
    ethers.utils.formatEther(senderInitialBalance),
    "ETH"
  );

  // send Ether
  const transaction = await wallet.sendTransaction({
    to: receiver,
    value: ethers.utils.parseEther("0.0005"),
  });

  //wait for transaction to be mined
  await transaction.wait();
  // fetch transaction
  console.log("transaction", transaction);

  //show recepient balance before transfer
  const recepientFinalBalance = await provider.getBalance(receiver);
  console.log(
    "recepientFinalBalance",
    ethers.utils.formatEther(recepientFinalBalance),
    "ETH"
  );

  // show sender balance before transfer
  const senderFinalBalance = await provider.getBalance(sender);
  console.log(
    "senderFinalBalance",
    ethers.utils.formatEther(senderFinalBalance),
    "ETH"
  );
};
main();
