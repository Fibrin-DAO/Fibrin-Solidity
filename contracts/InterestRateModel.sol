// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";

abstract contract InterestRateModel is zContract {
    error SenderNotSystemContract();
    SystemContract public immutable systemContract;

    constructor(address systemContractAddress) {
        systemContract = SystemContract(systemContractAddress);
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

    function getBorrowRate(uint cash, uint borrows, uint reserves) virtual external view returns (uint);

    function getSupplyRate(uint cash, uint borrow, uint reserve, uint uintReserveFactor) virtual external view returns (uint);

    // This allows the protocol to adjust the reserve factor dynamically based on certain market conditions, like extreme volatility
    function setDynamicReserveFactor(uint newReserveFactor) virtual external;

    // Setting caps and floors ensures that rates do not go excessively high or low, offering more predictability for users
    function setRateCaps(uint borrowRateCap, uint supplyRateCap) virtual external;
    function setRateFloors(uint borrowRateFloor, uint supplyRateFloor) virtual external;
}
