import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import { Pool } from "@ts/interfaces";
import { Main } from "@components";
import { STAKING_ADDRESS } from "src/constants";
import ABI from "@abi/Staking.json";
import { getContract } from "src/utils";
import { useAppDispatch } from "@hooks";
import { setPools, updatePools } from "@src/features/staking/stakingSlice";
import { useWeb3React } from "@web3-react/core";

const Home: React.FC<{ pools: Pool[] }> = ({ pools }) => {
    const { account } = useWeb3React();
    const [tried, setTried] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (pools.length > 0 && !tried) {
            dispatch(setPools(pools));
            setTried(true);
        }
        if (account) {
            dispatch(updatePools(account));
        }
    }, [tried, pools, account]);

    return <Main />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
    const staking = getContract(STAKING_ADDRESS, ABI);
    // eslint-disable-next-line
    const _pools = (await staking.getPools()) as any[];

    const pools = _pools.map(
        ({ poolName, rewardRate, lockPeriod, totalStaked }, id) => ({
            name: poolName,
            rewardRate: rewardRate.toString(),
            lockPeriod: lockPeriod.toString(),
            totalStaked: totalStaked.toString(),
            id: id,
            user_deposit_time: "0",
            user_stake: "0",
            user_reward: "0",
        }),
    );

    return {
        props: { pools }, // will be passed to the page component as
    };
};
