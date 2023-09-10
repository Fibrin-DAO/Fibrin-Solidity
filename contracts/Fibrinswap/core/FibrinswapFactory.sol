// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";

import "./FibrinswapPair.sol";
import "./interfaces/IUniswapV2FactoryV5.sol";

contract FibrinswapFactory is IUniswapV2FactoryV5, zContract {
    error SenderNotSystemContract();
    SystemContract public immutable systemContract;

    address public override feeToSetter;
    address public override feeTo;
    bool public override globalPause;

    mapping (address => mapping(address => address)) public override getPair;
    address[] public override allPairs;

    constructor(address systemContractAddress, address _feeToSetter) {
        systemContract = SystemContract(systemContractAddress);
        feeToSetter = _feeToSetter;
    }

    modifier onlyFTS() {
        require(msg.sender == feeToSetter);
        _;
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

    function allPairsLength() external override view returns(uint256) {
        return allPairs.length;
    }

    function createPair(address tokenA, address tokenB) external override returns(address pair) {
        return createPair(tokenA, tokenB, 30); // Default fee 0.3%
    }

    function createPair(address tokenA, address tokenB, uint fee) public override returns(address pair) {
        require(tokenA != tokenB, "Identical Addresses");
        (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 != address(0), "Zero Address");

        require(getPair[token0][token1] != address(0), "Pair exists");
        bytes memory bytecode = type(FibrinswapPair).creationCode;



    }

    function setFeeTo(address _feeTo) external override onlyFTS {
        feeTo = _feeTo;
    }

    function setFeeToSetter(address _feeToSetter) external override onlyFTS {
        feeToSetter = _feeToSetter;
    }

    function toggleGlobalPause() external override onlyFTS {
        require(!globalPause);
        globalPause = true;
    }
}