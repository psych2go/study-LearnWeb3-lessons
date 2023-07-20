// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Good {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function setOwner(address newOwner) public {
        require(tx.origin==owner,"Not woner");
        owner = newOwner;
    }
}