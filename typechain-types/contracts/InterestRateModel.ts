/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export type ZContextStruct = {
  origin: PromiseOrValue<BytesLike>;
  sender: PromiseOrValue<string>;
  chainID: PromiseOrValue<BigNumberish>;
};

export type ZContextStructOutput = [string, string, BigNumber] & {
  origin: string;
  sender: string;
  chainID: BigNumber;
};

export interface InterestRateModelInterface extends utils.Interface {
  functions: {
    "getBorrowRate(uint256,uint256,uint256)": FunctionFragment;
    "getSupplyRate(uint256,uint256,uint256,uint256)": FunctionFragment;
    "onCrossChainCall((bytes,address,uint256),address,uint256,bytes)": FunctionFragment;
    "setDynamicReserveFactor(uint256)": FunctionFragment;
    "setRateCaps(uint256,uint256)": FunctionFragment;
    "setRateFloors(uint256,uint256)": FunctionFragment;
    "systemContract()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getBorrowRate"
      | "getSupplyRate"
      | "onCrossChainCall"
      | "setDynamicReserveFactor"
      | "setRateCaps"
      | "setRateFloors"
      | "systemContract"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBorrowRate",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupplyRate",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onCrossChainCall",
    values: [
      ZContextStruct,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setDynamicReserveFactor",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRateCaps",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRateFloors",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "systemContract",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupplyRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onCrossChainCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDynamicReserveFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRateCaps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRateFloors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "systemContract",
    data: BytesLike
  ): Result;

  events: {};
}

export interface InterestRateModel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InterestRateModelInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getBorrowRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSupplyRate(
      cash: PromiseOrValue<BigNumberish>,
      borrow: PromiseOrValue<BigNumberish>,
      reserve: PromiseOrValue<BigNumberish>,
      uintReserveFactor: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    onCrossChainCall(
      context: ZContextStruct,
      zrc20: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDynamicReserveFactor(
      newReserveFactor: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRateCaps(
      borrowRateCap: PromiseOrValue<BigNumberish>,
      supplyRateCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRateFloors(
      borrowRateFloor: PromiseOrValue<BigNumberish>,
      supplyRateFloor: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    systemContract(overrides?: CallOverrides): Promise<[string]>;
  };

  getBorrowRate(
    cash: PromiseOrValue<BigNumberish>,
    borrows: PromiseOrValue<BigNumberish>,
    reserves: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSupplyRate(
    cash: PromiseOrValue<BigNumberish>,
    borrow: PromiseOrValue<BigNumberish>,
    reserve: PromiseOrValue<BigNumberish>,
    uintReserveFactor: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  onCrossChainCall(
    context: ZContextStruct,
    zrc20: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    message: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDynamicReserveFactor(
    newReserveFactor: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRateCaps(
    borrowRateCap: PromiseOrValue<BigNumberish>,
    supplyRateCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRateFloors(
    borrowRateFloor: PromiseOrValue<BigNumberish>,
    supplyRateFloor: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  systemContract(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getBorrowRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplyRate(
      cash: PromiseOrValue<BigNumberish>,
      borrow: PromiseOrValue<BigNumberish>,
      reserve: PromiseOrValue<BigNumberish>,
      uintReserveFactor: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onCrossChainCall(
      context: ZContextStruct,
      zrc20: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setDynamicReserveFactor(
      newReserveFactor: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRateCaps(
      borrowRateCap: PromiseOrValue<BigNumberish>,
      supplyRateCap: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRateFloors(
      borrowRateFloor: PromiseOrValue<BigNumberish>,
      supplyRateFloor: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    systemContract(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getBorrowRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplyRate(
      cash: PromiseOrValue<BigNumberish>,
      borrow: PromiseOrValue<BigNumberish>,
      reserve: PromiseOrValue<BigNumberish>,
      uintReserveFactor: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onCrossChainCall(
      context: ZContextStruct,
      zrc20: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setDynamicReserveFactor(
      newReserveFactor: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRateCaps(
      borrowRateCap: PromiseOrValue<BigNumberish>,
      supplyRateCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRateFloors(
      borrowRateFloor: PromiseOrValue<BigNumberish>,
      supplyRateFloor: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    systemContract(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getBorrowRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupplyRate(
      cash: PromiseOrValue<BigNumberish>,
      borrow: PromiseOrValue<BigNumberish>,
      reserve: PromiseOrValue<BigNumberish>,
      uintReserveFactor: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onCrossChainCall(
      context: ZContextStruct,
      zrc20: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDynamicReserveFactor(
      newReserveFactor: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRateCaps(
      borrowRateCap: PromiseOrValue<BigNumberish>,
      supplyRateCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRateFloors(
      borrowRateFloor: PromiseOrValue<BigNumberish>,
      supplyRateFloor: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    systemContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
