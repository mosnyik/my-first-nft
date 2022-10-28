// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


// importing the openzeppellin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// GameItem is ERC721 signifies that GameItem contract inherits from openzeppelin 
contract GameItem is ERC721{
    constructor() ERC721("GameItem", "ITM"){
        // a mint function to myself/my wallet
        _mint(msg.sender, 1);
    }
}