pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract USDC is ERC20,Ownable {

    string private _name = "USDC";
    string private _symbol = "USDC";
    uint8 private _decimals = 18;

    constructor() ERC20(_name, _symbol) {
        _mint(msg.sender, 1000000 * 10**18);
    }
}