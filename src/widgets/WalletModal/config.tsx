import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import { Config, ConnectorNames } from "./types";
import Safepal from "./icons/Safepal";
import OKEx from "./icons/OKEx";
import BitKeep from "./icons/BitKeep";
import CryptoCom from "./icons/CryptoCom";
import CoinBase from "./icons/CoinBase";
import Coin98 from "./icons/Coin98";
import Nabox from "./icons/Nabox";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
  },
  {
    title: "Crypto.com Defi Wallet",
    icon: CryptoCom,
    connectorId: ConnectorNames.CDCDefiWallet,
    priority: 4,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    priority: 2,
  },
  {
    title: "Trust Wallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
    priority: 3,
  },  
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: "Nabox",
    icon: Nabox,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  // {
  //   title: "Clover Wallet",
  //   icon: Clover,
  //   connectorId: ConnectorNames.CloverWallet,
  //   priority: 999,
  // },         
  // {
  //   title: "Binance Change Wallet",
  //   icon: BinanceChain,
  //   connectorId: ConnectorNames.BSC,
  //   priority: 999,
  // }, 
  {
    title: "Coin98",
    icon: Coin98,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: "Coinbase Wallet",
    icon: CoinBase,
    connectorId: ConnectorNames.CoinBase,
    priority: 999,
  },
  {
    title: "Token Pocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: "SafePal",
    icon: Safepal,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: "OKEx",
    icon: OKEx,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: "BitKeep",
    icon: BitKeep,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorIdv2";
export const walletLocalStorageKey = "wallet";
