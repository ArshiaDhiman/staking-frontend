import {
    createSlice,
    PayloadAction,
    ThunkDispatch,
    Action,
} from "@reduxjs/toolkit";
import { RootState } from "@src/store";
import { Pool } from "@ts/interfaces";

import { STAKING_ADDRESS } from "src/constants";
import ABI from "src/abi/Staking.json";
import { getContract } from "src/utils";

// Define a type for the slice state
interface StakingState {
    pools: Pool[];
}

// Define the initial state using that type
const initialState: StakingState = {
    pools: [],
};

export const stakingSlice = createSlice({
    name: "staking",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setPools: (state, action: PayloadAction<Pool[]>) => {
            state.pools = action.payload;
        },
    },
});

// whatever function the thunk returns should use .then (can't await)
export const updatePools = (account?: string) => {
    return (dispatch: ThunkDispatch<RootState, void, Action>): void => {
        const staking = getContract(STAKING_ADDRESS, ABI);
        // eslint-disable-next-line
        staking.getPools().then(async (_pools: any[]) => {
            const pools = await Promise.all(
                _pools.map(
                    async (
                        { poolName, rewardRate, lockPeriod, totalStaked },
                        id,
                    ) => {
                        let user_info = ["0,0,0"];

                        if (account) {
                            user_info = await staking.getStakeholderInfo(
                                id,
                                account,
                            );
                            // console.log(user_info);
                        }

                        return {
                            name: poolName,
                            rewardRate: rewardRate.toString(),
                            lockPeriod: lockPeriod.toString(),
                            totalStaked: totalStaked.toString(),
                            id: id,
                            user_deposit_time: user_info[0].toString(),
                            user_stake: user_info[1].toString(),
                            user_reward: user_info[2].toString(),
                        };
                    },
                ),
            );

            dispatch(setPools(pools));
        });
    };
};

// setPools is an action
export const { setPools } = stakingSlice.actions;

export default stakingSlice.reducer;
