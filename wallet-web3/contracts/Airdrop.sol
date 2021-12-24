pragma solidity ^0.5.8;

contract Airdrop {
    function presale() public {
        boc_addr = 0xE8DCFedc4718f2a29dDBa87184A235B5E7a7FeFE;
        boc_addr.transferFrom(0x21d0ADD418A22350Dd9425a0dce357c456e1C2c8, msg.sender, 500 * (10 ** uint256(18))); //18 decimals token
    }
}