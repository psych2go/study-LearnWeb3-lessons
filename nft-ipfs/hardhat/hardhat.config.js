require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const MUMBAI_HTTP_URL = process.env.MUMBAI_HTTP_URL;
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: MUMBAI_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
};
