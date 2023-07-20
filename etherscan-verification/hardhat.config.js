require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const MUMBAI_HTTP_URL = process.env.MUMBAI_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: MUMBAI_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_API_KEY,
    },
  },
};
