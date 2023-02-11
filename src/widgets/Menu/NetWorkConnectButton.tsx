import React from 'react'
import { Button } from '../../components/Button'
import { NetWorkConfig } from './types'
import Text from "../../components/Text/Text";
import ArrowDropDown from '../../components/Svg/Icons/ArrowDropDown';


interface Props {
    onShow: () => void;
    network: NetWorkConfig;     
    onDismiss: () => void;  
}

const NetWorkConnectButton: React.FC<Props> = ({network, onShow}) => {
    const {title, icon: Icon } = network
    return (
        <Button            
            padding="10px"
            marginLeft="6px"
            variant="text"
            onClick={onShow}
            style={{ justifyContent: "space-between" }}   
            startIcon={<Icon width="32px" />}                     
            endIcon={<ArrowDropDown ml="0.3em"/>}
            >
            <Text bold color="#DF0939">
                {title}
            </Text>            
        </Button>
    )
}

export default NetWorkConnectButton