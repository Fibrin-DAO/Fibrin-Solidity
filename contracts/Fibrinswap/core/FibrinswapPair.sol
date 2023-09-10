// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";

import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "./FibrinswapERC20.sol";
import './libraries/UQ112x112.sol';

import './interfaces/IUniswapV2FactoryV5.sol';
import './interfaces/IUniswapV2CalleeV5.sol';
import './interfaces/IUniswapV2PairPartialV5.sol';

contract FibrinswapPair is zContract, IUniswapV2PairPartialV5, FibrinswapERC20 {
    using UQ112x112 for uint224;

    error SenderNotSystemContract();
    SystemContract public immutable systemContract;

    address public override factory;
    address public override token0;
    address public override token1;

    uint256 public override fee;

    uint public constant override MINIMUM_LIQUIDITY = 10 ** 3;
    bytes4 public constant SELECTOR = bytes4(keccak256(bytes('transfer(address,uint256)')));

    mapping(address => uint256[]) public orderIDsForUser;

    TWAPObservation[] public TWAPObservationHistory;

    struct TWAPObservation {
        uint256 timestamp;
        uint256 price0CumulativeLast;
        uint256 price1CumulativeLast;
    }

    constructor(address systemContractAddress) {
        systemContract = SystemContract(systemContractAddress);
        factory = msg.sender;
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

    modifier feeCheck(uint256 _fee) {
        require(_fee > 0 && _fee < 101);
        _;
    }

    function initialize(address _token0, address _token1, uint256 _fee) feeCheck(_fee) external override {
        require(msg.sender == factory, "Not Permitted");
        token0 = _token0;
        token1 = _token1;
        fee = 1000 - _fee;

        // ***
    }

    function price0CumulativeLast() public view override returns(uint256) {
        return TWAPObservationHistory.length > 0 ? TWAPObservationHistory[TWAPObservationHistory.length - 1].price0CumulativeLast : 0;
    }

    function price1CumulativeLast() public view override returns(uint256) {
        return TWAPObservationHistory.length > 0 ? TWAPObservationHistory[TWAPObservationHistory.length - 1].price1CumulativeLast : 0;
    }

    function getTWAPHistoryLength() public view override returns(uint256) {
        return TWAPObservationHistory.length;
    }

    function getOrderIDsForUser(address _user) external view override returns(uint256[] memory) {
        return orderIDsForUser[_user];
    }

    function getOrderIDsForUserLength(address _user) external view override returns(uint256) {
        return orderIDsForUser[_user].length;
    }

    function getDetailedOrdersForUser(address _user, uint256 _offset, uint256 _limit) external view returns() {
        uint256[] memory order_ids = orderIDsForUser[_user];
        uint256 limit_to_use = Math.min(_limit, order_ids.length - _offset);
        
    }
    
}
