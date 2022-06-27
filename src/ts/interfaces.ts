export interface Pool {
    name: string;
    rewardRate: string;
    lockPeriod: string;
    totalStaked: string;
    id: number;
    user_deposit_time: string;
    user_stake: string;
    user_reward: string;
}

export interface StakingProps {
    balance: string;
}

export interface PoolProps {
    balance: string;
    pool: Pool;
}

export interface IStakeMenu {
    pool: Pool;
    balance: string;
}
