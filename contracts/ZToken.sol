// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";
import "./InterestRateModel.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

abstract contract ZToken is zContract, ERC20, AccessControl {
    error SenderNotSystemContract();
    SystemContract public immutable systemContract;

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    constructor(
        address systemContractAddress, 
        address admin,
        string memory _name,
        string memory _symbol
    ) ERC20(_name, _symbol) {
        systemContract = SystemContract(systemContractAddress);
        _grantRole(ADMIN_ROLE, admin);
    }

    function onCrossChainCall(
        zContext calldata context,
        address zrc20,
        uint256 amount,
        bytes calldata message
    ) external virtual override {
        if (msg.sender != address(systemContract)) {
            revert SenderNotSystemContract();
        }
        // TODO: implement the logic
    }

    function initialise() external {
        require(hasRole(ADMIN_ROLE, msg.sender), "Caller is not a admin");
    }
}
