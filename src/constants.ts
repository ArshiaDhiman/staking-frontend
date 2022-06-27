export const STAKING_ADDRESS = "0xFa908Ab053111fa05186229b909E0d90AC85Cd1f";

export const TOKEN_ADDRESS = "0xe4aa457d296b896451617f6c83468f3691e0aba4";

export const TOKEN_SYMBOL = "ARSH";

export const TOKEN_DECIMALS = 18;

export const LARGEST_NUM =
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

// oldstaking 0x1D325b473ee603A08EBF2C375d2764ba084b25a8
// old staking 0x145034662b6C885BBEEA112dd25690eb76e9CD93

export const userMustWait =
    'cannot estimate gas; transaction may fail or may require manual gas limit (error={"code":-32603,"message":"execution reverted: user must wait till lock period is done","data":{"originalError":{"code":3,"data":"0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002775736572206d75737420776169742074696c6c206c6f636b20706572696f6420697320646f6e6500000000000000000000000000000000000000000000000000","message":"execution reverted: user must wait till lock period is done"}}}, method="estimateGas", transaction={"from":"0xcC2D7b044eE0C7467E3970bfA2615163c8a65084","to":"0x1D325b473ee603A08EBF2C375d2764ba084b25a8","data":"0x2e17de780000000000000000000000000000000000000000000000000000000000000000","accessList":null}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.5.0)';

export const knownErrors: { [key: string]: string } = {
    [userMustWait]: "user must wait till lock period is done",
};
