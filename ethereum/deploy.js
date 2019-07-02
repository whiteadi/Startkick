const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "your 12 mnemonic words",
  "https://rinkeby.infura.io/d38aacc756f64a76a9b9a9c61e61d315"
);
const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Deploying contract", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: "0x" + compiledFactory.bytecode }) // add bytecode
    .send({ from: accounts[0] });

  console.log("Deployed to:", result.options.address);
};
deploy();
