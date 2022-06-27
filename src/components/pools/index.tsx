import React from "react";

import { StakingPool } from "@components";
import { StakingProps } from "@ts/interfaces";
import { useAppSelector } from "@hooks";

export const Pools: React.FC<StakingProps> = ({ balance }) => {
    const pools = useAppSelector((state) => state.staking.pools);

    return (
        <div className="space-y-4 px-4">
            <div className="text-xl w-full max-w-4xl mx-auto mt-4">
                Staking Pools
            </div>
            {pools.map((pool, id) => (
                <StakingPool balance={balance} key={id} pool={pool} />
            ))}
        </div>
    );
};
