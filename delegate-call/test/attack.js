const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("delegatecall Attack", function () {
  it("Should change the owner of Good contract", async function () {
    const Helper = await ethers.getContractFactory("Helper");
    const helper = await Helper.deploy();
    await helper.deployed();
    console.log("Helper Contract's Address", helper.address);

    const Good = await ethers.getContractFactory("Good");
    const good = await Good.deploy(helper.address);
    await good.deployed();
    console.log("Good Contract's Address", good.address);

    const Attack = await ethers.getContractFactory("Attack");
    const attack = await Attack.deploy(good.address);
    await attack.deployed();
    console.log("Attack Contract's Address", attack.address);

    let tx = await attack.attack();
    await tx.wait();

    expect(await good.owner()).to.equal(attack.address);
  });
});
