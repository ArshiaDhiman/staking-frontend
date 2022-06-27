import React, { useState } from "react";

import { Button, Logo } from "@components";
import { secondsToWeeks } from "@src/utils";
import { PoolProps } from "@ts/interfaces";

import { Card } from "./card";
import { StakeMenu } from "./stake-menu";
import { TextItem } from "./text-item";

export const StakingPool: React.FC<PoolProps> = ({ pool, balance }) => {
    const [showMenu, setShowMenu] = useState(false);

    const onClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <Card>
            <div className="px-4 md:grid grid-cols-7 items-center gap-4 md:pb-2">
                <div className="text-center">
                    <Logo />
                </div>

                <div className="col-span-2">
                    <TextItem title={"Name"} text={pool.name} />
                </div>

                <TextItem title={"Reward"} text={pool.rewardRate + " %"} />

                <TextItem
                    title={"Lock Period"}
                    text={
                        Math.round(secondsToWeeks(pool.lockPeriod)).toString() +
                        " weeks"
                    }
                />

                <TextItem
                    title={"Total Staked"}
                    text={
                        parseInt(pool.totalStaked) / 1000000000000000000 +
                        " ARSH"
                    }
                />

                <Button className="md:w-16 w-full my-4" onClick={onClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={showMenu ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                        />
                    </svg>
                </Button>
            </div>
            {showMenu && <StakeMenu pool={pool} balance={balance} />}
        </Card>
    );
};
