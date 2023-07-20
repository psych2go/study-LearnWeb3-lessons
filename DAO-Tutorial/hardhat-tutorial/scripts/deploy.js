const { ethers } = require("hardhat");
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  /*
  const FakeNFTMarketplace = await ethers.getContractFactory(
    "FakeNFTMarketplace"
  );
  const fakeNFTMarketplace = await FakeNFTMarketplace.deploy();
  await fakeNFTMarketplace.deployed();

  console.log("FakeNFTMarketplace deployed to:", fakeNFTMarketplace.address);
  */

  const address = "0x25E5DB895003DD606Aa479148558Ea6306D4Faba";

  const CryptoDevsDao = await ethers.getContractFactory("CryptoDevsDAO");
  const cryptoDevsDao = await CryptoDevsDao.deploy(
    address,
    CRYPTODEVS_NFT_CONTRACT_ADDRESS,
    { value: ethers.utils.parseEther("0.15") }
  );
  await cryptoDevsDao.deployed();

  console.log("CryptoDevsDao deployed to:", cryptoDevsDao.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
