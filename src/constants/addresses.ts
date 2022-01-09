import { Networks } from "./blockchain";

const AVAX_MAINNET = {
    DAO_ADDRESS: "",
    MOON_ADDRESS: "",
    APOLO_ADDRESS: "",
    MIM_ADDRESS: "",
    STAKING_ADDRESS: "",
    STAKING_HELPER_ADDRESS: "",
    APOLO_BONDING_CALC_ADDRESS: "",
    TREASURY_ADDRESS: "",
    ZAPIN_ADDRESS: "", //"",
    WMOON_ADDRESS: "",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;

    throw Error("Network don't support");
};
