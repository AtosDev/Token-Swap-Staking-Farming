pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract STB is ERC20,Ownable {

    string private _name = "STB";
    string private _symbol = "STB";
    uint8 private _decimals = 18;

    constructor() ERC20(_name, _symbol) {
        _mint(msg.sender, 1000000 * 10**18);
    }
}