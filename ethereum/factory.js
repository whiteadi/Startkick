import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xD96dC6e722363f9680624A16269085bCcccd1dE0"
);

export default instance;
