const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Malicious External Contract", function () {
  it("Should change the owner of the Good Contract", async function () {
    const Malicious = await ethers.getContractFactory("Malicious");
    const malicious = await Malicious.deploy();
    await malicious.deployed();
    console.log("Malicious Contract's Address:", malicious.address);

    const Good = await ethers.getContractFactory("Good");
    const good = await Good.deploy(malicious.address, {
      value: ethers.utils.parseEther("3"),
    });
    await good.deployed();
    console.log("Good Contract's Address:", good.address);

    const [_, addr1] = await ethers.getSigners();
    let tx = await good.connect(addr1).addUserToList();
    await tx.wait();

    const eligible = await good.connect(addr1).isUserEligible();
    expect(eligible).to.equal(false);
  });
});
