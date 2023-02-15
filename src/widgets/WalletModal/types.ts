import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";

export type ConnectorId =
  | "authereum"
  | "fortmatic"
  | "frame"
  | "injected"
  | "portis"
  | "squarelink"
  | "torus"
  | "walletconnect"
  | "walletlink"
  | "bsc"

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
  CDCDefiWallet = "Crypto.com DeFi Wallet",
  CloverWallet = "Clover Wallet",
  CoinBase = "Coinbase connector",
}

export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  title: string;
  icon: FC<SvgProps>;
  connectorId: ConnectorNames;
  priority: number;
}
