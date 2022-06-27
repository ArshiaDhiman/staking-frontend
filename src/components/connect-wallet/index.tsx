import React from "react";
import { injected } from "@src/connectors";
import { useWeb3React } from "@web3-react/core";
import { toast } from "react-toastify";
import { Button } from "@components";
import { useEagerConnect } from "@hooks/useEagerConnect";

export const ConnectWallet: React.FC = () => {
    const { active, activate, deactivate } = useWeb3React();
    const tried_to_eager_connect = useEagerConnect();

    async function connect() {
        if (!tried_to_eager_connect) {
            return;
        }

        try {
            await activate(injected, undefined, true);
            // eslint-disable-next-line
        } catch (err: any) {
            toast.error(err.data?.message || err.message);
        }
    }

    function disconnect() {
        try {
            deactivate();
            // eslint-disable-next-line
        } catch (err: any) {
            toast.error(err.data?.message || err.message);
        }
    }

    return (
        <div>
            <Button
                className="w-40"
                loading={false}
                onClick={active ? disconnect : connect}
            >
                {active ? "Disconnect" : "Connect"}
            </Button>
        </div>
    );
};
