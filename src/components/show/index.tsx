import React from "react";

import { Card } from "@components/staking-pool/card";

export const Show: React.FC = () => {
    return (
        <div className="px-4">
            <Card>
                <div className="text-gray-300 text-center p-4">
                    Stake your ARSH Tokens to recieve rewards! Once tokens are
                    staked they are locked up till the lockup period is
                    complete. Dont have ARSH Tokens?{" "}
                    <a href="https://token-faucet.vercel.app/ ">
                        <button className="underline">Click here</button>{" "}
                    </a>
                    to recieve 10,000 ARSH Tokens from the Faucet every hour
                </div>
            </Card>
        </div>
    );
};
