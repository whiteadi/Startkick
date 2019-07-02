import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/d38aacc756f64a76a9b9a9c61e61d315"
  );
  web3 = new Web3(provider);
}

export default web3;
