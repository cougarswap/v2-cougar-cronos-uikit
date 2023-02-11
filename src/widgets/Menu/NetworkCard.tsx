import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { NetWorkConfig } from "./types";
import Text from "../../components/Text/Text";


interface Props {
    network: NetWorkConfig;    
    onDismiss?: () => void;
}

const NetworkButton = styled(Button)`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border: none;
  border-radius: 20px;
  padding: 16px 24px;
  background-color: ${({theme}) => theme.colors.headerTop}
`;

const LinkButton = styled(Button)`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border: none;
  padding: 16px 24px;
  border-radius: 20px;
  &:hover {
    background-color: ${({theme}) => `${theme.colors.input}B3`}
  }
`;

const NetworkCard: React.FC<Props> = ({network, onDismiss = () => null}) => {
    const {title, url, active, disabled, icon: Icon } = network;
    return (
        disabled ? 
        <NetworkButton         
            disabled   
            variant="subtle">
            <Icon width="60px" height="60px" mb="8px" />
            <Text bold fontSize="16px">{title}</Text>
        </NetworkButton> : 
        active ? <NetworkButton         
            onClick={onDismiss}   
            variant="subtle">
            <Icon width="60px" height="60px" mb="8px" />
            <Text bold fontSize="16px">{title}</Text>
        </NetworkButton> : 
        <LinkButton as="a" href={url} aria-label={network.fullName}
        >
            <Icon width="60px" height="60px" mb="8px" />
            <Text bold fontSize="16px">{title}</Text>
        </LinkButton>
    )
}

export default NetworkCard