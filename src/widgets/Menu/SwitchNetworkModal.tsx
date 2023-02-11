import React from "react"
import styled, { useTheme } from "styled-components"
import { Modal } from "../Modal";
import { NetWorkConfig } from "./types";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Flex } from "../../components/Flex";
import NetworkCard from "./NetworkCard";

interface Props {
    networks: NetWorkConfig[]
    onDismiss?: () => void
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const NetworkWrapper = styled(Flex)`
  display: flex;  
  flex-wrap: wrap;  
  padding: 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};  
  & > * {
    flex: 50%;
  }

  ${({ theme }) => theme.mediaQueries.nav} {
    & > * {
        flex: 1;
    }
  }
`;

const SwitchNetworkModal: React.FC<Props> = ({networks, onDismiss}) => {
    return (
        <Modal title="Switch to other network" onDismiss={onDismiss}>
            <NetworkWrapper>
                {networks.map(network => (
                    <NetworkCard key={network.title} network={network} onDismiss={onDismiss}/>                        
                ))}
            </NetworkWrapper>
            <HelpLink
                href="https://cougarswap.cougarecosystem.io/polycougarswap/How To Set Up Your Wallet On Polygon"
                external
            >
                <HelpIcon color="primary" mr="6px" />
                Learn how to start
            </HelpLink>
        </Modal>
    )
}

export default SwitchNetworkModal