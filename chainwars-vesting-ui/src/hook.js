import { ethers } from "ethers";
import { useContractCall, useContractFunction } from "@usedapp/core";
import CWEVestingABI from "./abi/CWEVesting.json"
import MockTokenABI from "./abi/MockToken.json"
import { formatEther } from "@ethersproject/units";
import { Contract } from "@ethersproject/contracts";

const CWEVestingAddress = process.env.REACT_APP_CWE_VESTING_ADDRESS;
const MockTokenAddress = process.env.REACT_APP_CWE_TOKEN;

const CWEVestingInterface = new ethers.utils.Interface(CWEVestingABI);
const MockTokenInterface = new ethers.utils.Interface(MockTokenABI);
const contract = new Contract(CWEVestingAddress, CWEVestingInterface);

export const TokenDecimal = () => {
    const [amount] = useContractCall({
        abi: MockTokenInterface,
        address: MockTokenAddress,
        method: "decimals",
        args: [],
    }) ?? [0];
    return amount;
}

export const ClaimableAmount = (investor) => {
    const [amount] = useContractCall({
        abi: CWEVestingInterface,
        address: CWEVestingAddress,
        method: "claimableAmount",
        args: [investor],
    }) ?? [0];
    return parseFloat(formatEther(amount)).toFixed(6);
}

export const VestedAmount = (investor) => {
    const [amount] = useContractCall({
        abi: CWEVestingInterface,
        address: CWEVestingAddress,
        method: "vestedAmount",
        args: [investor],
    }) ?? [0];
    return parseFloat(formatEther(amount)).toFixed(6);
}

export const VestingOwner = () => {
    const [owner] = useContractCall({
        abi: CWEVestingInterface,
        address: CWEVestingAddress,
        method: "owner",
        args: []
    }) ?? [];
    return owner;
}

export const useContractMethod = (methodName) => {
    const { state, send, events } = useContractFunction(contract, methodName, {});
    return { state, send, events };
}
