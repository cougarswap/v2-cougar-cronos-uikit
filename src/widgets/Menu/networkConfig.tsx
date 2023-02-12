import { BinanceIcon, FantomIcon, PolygonIcon, HarmonyIcon, AvalancheIcon, CronosIcon, MoonbeamIcon, ArbitrumIcon } from "../../components/Svg";
import { NetWorkConfig } from "./types";


const networks: NetWorkConfig[] = [
    {
        title: "BSC",
        fullName: "Binance Smart Chain",
        icon: BinanceIcon,
        active: false,        
        url: 'https://app.cougarswap.io/'
    },
    {
        title: "Poly",
        fullName: "Polygon Network",
        icon: PolygonIcon,
        active: false,        
        url: 'https://polyapp.cougarswap.io'
    },
{
        title: "Fantom",
        fullName: "Fantom Network",
        icon: FantomIcon,
        active: false,        
        url: 'https://fantomapp.cougarswap.io'
    },
    {
        title: "Harmony",
        fullName: "Harmony Network",
        icon: HarmonyIcon,
        active: false,        
        url: 'https://harmony.cougarswap.io'
    },
    {
        title: "Avax",
        fullName: "Avax Network",
        icon: AvalancheIcon,
        active: false,        
        url: 'https://avaapp.cougarswap.io/'
    },    
    {
        title: "Cronos",
        fullName: "Cronos Network",
        icon: CronosIcon,
        active: true,        
        url: 'https://cronosapp.cougarswap.io'
    },
    {
        title: "Moonbeam",
        fullName: "Moonbeam Network",
        icon: MoonbeamIcon,
        active: false,        
        url: 'https://moonbeam.cougarswap.io'
    },
    {
        title: "Arbitrum",
        fullName: "Arbitrum Network",
        icon: ArbitrumIcon,
        active: false,        
        url: 'https://arbi.cougarswap.io'
    }
]

export default networks;