import React, { useState, useEffect } from "react";

import { Show, Pools } from "@components";
import { useContract } from "@hooks/useContract";
import { TOKEN_ADDRESS } from "@src/constants";
import TokenABI from "@abi/Token.json";
import { useWeb3React } from "@web3-react/core";

export const Main: React.FC = () => {
    const [balance, setBalance] = useState("0");
    const token = useContract(TOKEN_ADDRESS, TokenABI, true);
    const { account } = useWeb3React();

    useEffect(() => {
        if (token) {
            token
                .balanceOf(account)
                .then((balance: string) => setBalance(balance.toString()));
        }
    }, [token]);

    return (
        <div className="py-12 min-h-screen">
            <Show />
            <Pools balance={balance} />
        </div>
    );
};
