import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useWeb3React } from "@web3-react/core";
import { useContract } from "@hooks/useContract";
import {
    STAKING_ADDRESS,
    TOKEN_ADDRESS,
    LARGEST_NUM,
    knownErrors,
} from "@src/constants";
import StakingABI from "@abi/Staking.json";
import TokenABI from "@abi/Token.json";
import { parseBalance, numberToWei } from "@src/utils";
import { Pool } from "@ts/interfaces";

import { BigNumber } from "@ethersproject/bignumber";
import { calculateReward } from "@src/utils";

import { Button, Input } from "@components";
import { useAppDispatch } from "@hooks";
import { updatePools } from "@src/features/staking/stakingSlice";

export const Deposit: React.FC<{
    pool: Pool;
}> = ({ pool }) => {
    const [amount, setAmount] = useState("0");
    const [loading, setLoading] = useState(false);
    const [allowance, setAllowance] = useState("0");
    const [enable, setEnable] = useState(false);
    const staking = useContract(STAKING_ADDRESS, StakingABI, true);
    const token = useContract(TOKEN_ADDRESS, TokenABI, true);
    const { account, active } = useWeb3React();
    const dispatch = useAppDispatch();

    const stakeTokens = async () => {
        setLoading(true);
        try {
            if (allowance === "0") {
                toast.info("Awaiting successful transaction");
                const tx = await token?.approve(STAKING_ADDRESS, LARGEST_NUM);
                await tx.wait();
                setEnable(true);
                toast.success("Success");
                dispatch(updatePools(account || ""));
            } else {
                if (staking) {
                    toast.info("Awaiting successful transaction");
                    const tx = await staking.stake(
                        numberToWei(amount),
                        pool.id,
                    );
                    await tx.wait();
                    toast.success("Success");
                    dispatch(updatePools(account || ""));
                }
            }

            setAmount("0");
            // eslint-disable-next-line
        } catch (err: any) {
            console.log(err.message);

            const message = knownErrors[err.message] || err.message;
            toast.error(message);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (token) {
            token
                .allowance(account, STAKING_ADDRESS)
                .then((allowance: string) =>
                    setAllowance(allowance.toString()),
                );
        }
    }, [token, enable, account]);

    const amountAfterStake = BigNumber.from(pool.user_stake).add(
        numberToWei(amount),
    );

    const estimatedReward = calculateReward(
        amountAfterStake,
        pool.rewardRate,
        pool.lockPeriod,
    );

    return (
        <div className="flex-1 space-y-2">
            <p className="text-base text-gray-300">
                Amount After Stake{" "}
                <strong className="text-white">
                    {parseBalance(amountAfterStake)} ARSH
                </strong>
            </p>
            <p className="text-base text-gray-300">
                New Estimated Reward{" "}
                <strong className="text-white">
                    {parseBalance(estimatedReward)} ARSH
                </strong>
            </p>
            <div>
                <Input
                    label="Stake Amount"
                    id="amount"
                    placeholder="Amount"
                    value={amount}
                    type="number"
                    onChange={(e) => setAmount(e.target.value || "0")}
                />
                <Button
                    onClick={stakeTokens}
                    className="w-full"
                    loading={loading}
                    disabled={!active}
                >
                    {allowance !== "0" ? "Stake" : "Enable"}
                </Button>
            </div>
        </div>
    );
};
