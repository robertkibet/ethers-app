const {ethers} = require("ethers");
const INFURA_ID = "1eff72131d494f7d95ef6c57558cab47";
const mainNetAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

const provider = new ethers.providers.JsonRpcProvider(
  `https://ropsten.infura.io/v3/${INFURA_ID}`
);
const sender = "0x8e5af5b3eF5Cae28B772D927a6158cCE271261d8";
const receiver = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const privateKey = process.env.ETHEREUM_TESTNET_PRIVATE_KEY;

const ERC20_ABI = [
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

const address = receiver;
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const balance = await contract.balanceOf(sender);
  console.log(`\nReading from ${address}\n`);
  console.log(`Balance of sender: ${balance}\n`);

  const contractWithWallet = contract.connect(wallet);
  const tx = await contractWithWallet.transfer(receiver, balance);
  await tx.wait();
  console.log("tx", tx);
};
main();
