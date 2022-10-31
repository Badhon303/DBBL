// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.1;


contract Bank {

    uint256 balance=0;


    function credit(uint256 amount) public {
        balance = balance + amount;
    }

    function debit (uint256 amount) public {
        balance = balance - amount;
    }

    function getBalance() public view returns (uint256) {
        return balance;
    }
}