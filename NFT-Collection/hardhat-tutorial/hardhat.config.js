require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const GOERLI_HTTP_URL = process.env.GOERLI_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
