import React from "react";
import { useWeb3React } from "@web3-react/core";
import { IStakeMenu } from "@ts/interfaces";
import { parseBalance } from "@src/utils";

import { Deposit } from "./deposit";
import { Withdraw } from "./withdraw";

export const StakeMenu: React.FC<IStakeMenu> = ({ balance, pool }) => {
    const { active } = useWeb3React();

    return (
        <div>
            <div className="text-center border border-white border-opacity-5 py-2">
                Available : {parseBalance(active ? balance : 0)} ARSH
            </div>
            <div className="flex p-6 space-x-6 rounded-b-lg">
                <Deposit pool={pool} />
                <Withdraw pool={pool} />
            </div>
        </div>
    );
};
