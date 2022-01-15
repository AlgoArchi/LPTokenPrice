// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CWTokenMock is ERC20("MOCK","MOCK") {
    function mint(uint256 amount) external {
        _mint(msg.sender, amount);
    }
}
