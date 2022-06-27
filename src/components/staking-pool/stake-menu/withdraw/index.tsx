import React, { useState } from "react";
import { toast } from "react-toastify";

import StakingABI from "@abi/Staking.json";
import { Button } from "@components";
import { useContract } from "@hooks/useContract";
import { STAKING_ADDRESS, knownErrors } from "@src/constants";
import { parseBalance } from "@src/utils";
import { useWeb3React } from "@web3-react/core";
import { Pool } from "@ts/interfaces";
import { useDispatch } from "react-redux";
import { updatePools } from "@src/features/staking/stakingSlice";
import { BigNumber } from "@ethersproject/bignumber";

export const Withdraw: React.FC<{
    pool: Pool;
}> = ({ pool }) => {
    const [loading, setLoading] = useState(false);
    const staking = useContract(STAKING_ADDRESS, StakingABI, true);
    const { active, account } = useWeb3React();
    const dispatch = useDispatch();

    const redeemTokens = async () => {
        setLoading(true);
        try {
            if (staking) {
                toast.info("Awaiting successful transaction");
                const tx = await staking?.unstake(pool.id);
                await tx.wait();
                toast.success("Success");
                dispatch(updatePools(account || ""));
            }

            // eslint-disable-next-line
        } catch (err: any) {
            console.log(err.message);

            const message = knownErrors[err.message] || err.message;
            toast.error(message);
        }
        setLoading(false);
    };

    const getDaysLeft = (_deposit_time: string) => {
        const deposit_time = BigNumber.from(_deposit_time).toNumber();
        const time_stamp_seconds = Math.floor(Date.now() / 1000);
        const seconds_locked = BigNumber.from(pool.lockPeriod).toNumber();
        const time_done = time_stamp_seconds - deposit_time;
        const seconds_left = seconds_locked - time_done;
        const days_left = Math.floor(seconds_left / 86400);

        return Math.max(days_left, 0);
    };

    const getUserSecondsDone = (_deposit_time: string) => {
        const deposit_time = BigNumber.from(_deposit_time).toNumber();
        const time_stamp_seconds = Math.floor(Date.now() / 1000);
        const time_done = time_stamp_seconds - deposit_time;

        return time_done;
    };

    return (
        <div className="flex-1 space-y-2 relative">
            <p className="text-base text-gray-300">
                Amount Staked{" "}
                <strong className="text-white">
                    {parseBalance(pool.user_stake)} ARSH
                </strong>
            </p>

            <p className="text-base text-gray-300">
                Rewards Earned{" "}
                <strong className="text-white">
                    {parseBalance(pool.user_reward)} ARSH
                </strong>
            </p>

            <p className="text-base text-gray-300">
                Days Left{" "}
                <strong className="text-white">
                    {pool.user_stake > "0"
                        ? getDaysLeft(pool.user_deposit_time)
                        : "0"}{" "}
                    Days
                </strong>
            </p>

            <Button
                onClick={redeemTokens}
                className="w-full absolute inset-x-0 bottom-0"
                loading={loading}
                disabled={
                    !active ||
                    pool.user_stake == "0" ||
                    getUserSecondsDone(pool.user_deposit_time) <
                        BigNumber.from(pool.lockPeriod).toNumber()
                }
            >
                Redeem
            </Button>
        </div>
    );
};
