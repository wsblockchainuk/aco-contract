// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ACO is ERC20 {
    constructor() ERC20("Asset Crypto Offering", "ACO") {
        _mint(msg.sender, 500000000 * 10 ** decimals());
    }
}