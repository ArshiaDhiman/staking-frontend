import { Contract, ContractInterface } from "@ethersproject/contracts";
import { InfuraProvider } from "@ethersproject/providers";
import { commify, formatUnits, parseEther } from "@ethersproject/units";
import { BigNumber, BigNumberish } from "@ethersproject/bignumber";

const rewardInterval = 31536000;
const library = new InfuraProvider("rinkeby");

export function shortenHex(hex: string, length = 4): string {
    return `${hex.substring(0, length + 2)}…${hex.substring(
        hex.length - length,
    )}`;
}

export function getContract(address: string, ABI: ContractInterface): Contract {
    return new Contract(address, ABI, library);
}

export function secondsToWeeks(_seconds: string): number {
    const seconds = parseInt(_seconds);
    const months = seconds / 604800;
    return months;
}

export const parseBalance = (
    balance: BigNumberish,
    decimals = 18,
    decimalsToDisplay = 3,
): string =>
    commify(Number(formatUnits(balance, decimals)).toFixed(decimalsToDisplay));

export const numberToWei = (number: string): string => {
    const num = number
        .split("")
        .filter((c) => c !== ",")
        .join("");
    return parseEther(num).toString();
};

export const calculateReward = (
    _amount: BigNumber,
    rewardRate: BigNumberish,
    lockperiod: BigNumberish,
): BigNumber => {
    const reward = _amount
        .mul(rewardRate)
        .mul(lockperiod)
        .div(rewardInterval)
        .div(100);

    return reward;
};
