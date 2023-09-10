// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FibrinStablecoin is zContract, ERC20, AccessControl, Ownable {
    error SenderNotSystemContract();
    SystemContract public immutable systemContract;

    enum PriceChoice { FIBRIN, FXS }

    bytes32 public constant COLLATERAL_RATIO_PAUSER = keccak256("COLLATERAL_RATIO_PAUSER");

    address public creator_address;
    address public timelock_address;

    uint256 public global_collateral_ratio; // 6 decimals of precision, e.g. 924102 = 0.924102
    uint256 public fibrin_step; // Amount to change the collateralization ratio by upon refreshCollateralRatio()
    uint256 public refresh_cooldown; // Seconds to wait before being able to run refreshCollateralRatio() again
    uint256 public price_target; // The price of FIBRIN at which the collateral ratio will respond to; this value is only used for the collateral ratio mechanism and not for minting and redeeming which are hardcoded at $1
    uint256 public price_band; // The bound above and below the price target at which the refreshCollateralRatio() will not change the collateral ratio
    uint256 public constant genesis_supply = 2000000e18;

    /* ========== CONSTRUCTOR ========== */

    constructor(
        address systemContractAddress,
        string memory _name,
        string memory _symbol,
        address _creator_address,
        address _timelock_address
    ) ERC20(_name, _symbol) {
        systemContract = SystemContract(systemContractAddress);
        creator_address = _creator_address;
        timelock_address = _timelock_address;

        Ownable.transferOwnership(_creator_address);
        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());

        _mint(creator_address, genesis_supply);
        _grantRole(COLLATERAL_RATIO_PAUSER, creator_address);
        _grantRole(COLLATERAL_RATIO_PAUSER, timelock_address);


        fibrin_step = 2500; // 6 decimals of precision, equal to 0.25%
        global_collateral_ratio = 1000000; // Fibrin system starts off fully collateralized (6 decimals of precision)
        refresh_cooldown = 3600; // Refresh cooldown period is set to 1 hour (3600 seconds) at genesis
        price_target = 1000000; // Collateral ratio will adjust according to the $1 price target at genesis
        price_band = 5000; // Collateral ratio will not adjust if between $0.995 and $1.005 at genesis
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

    /* ========== CONSTRUCTOR ========== */
    
    function oraclePrice(PriceChoice choice) internal view returns(uint256) {

    }

    function fibrin_price() external view returns(uint256) {
        return oraclePrice(PriceChoice.FIBRIN);
    }

    function fxs_price() external view returns(uint256) {
        return oraclePrice(PriceChoice.FXS);
    }
}
