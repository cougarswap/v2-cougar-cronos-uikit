import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon, CogIcon, SvgProps, BinanceIcon } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT, MENU_SOCIAL_HEIGHT } from "./config";
import { NetWorkConfig, PanelProps, PushedProps } from "./types";
import NetWorkConnectButton from "./NetWorkConnectButton";
import config from './networkConfig';
import useModal from "../Modal/useModal";
import SwitchNetworkModal from "./SwitchNetworkModal";

interface Props extends PanelProps, PushedProps {}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon, LanguageIcon } = Icons;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;    
  border-right: 2px solid ${({ theme }) => theme.colors.headerTop};
  border-bottom: 2px solid ${({ theme }) => theme.colors.headerTop};
  border-top: 1px solid ${({ theme }) => theme.colors.textSubtle};  
  border-bottom-right-radius: 30px;  
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_SOCIAL_HEIGHT}px;
  padding: 0 16px;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const SocialEntryBody = styled(Flex)`
  width: 100%;  
  flex-wrap: wrap;  
  column-gap: 30px;
`

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
  priceLink,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  const activeNetWork = config.find(_ => _.active === true) as NetWorkConfig;
  const [onPresentSwitchNetWorkModal] = useModal(<SwitchNetworkModal networks={config} />);
  
  return (
    <Container>
      <SettingsEntry>        
        {/* <Dropdown
          position="top-right"
          target={
            <Button padding="0" variant="text" startIcon={<LanguageIcon color="textSubtle" width="24px" />}>
              <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
            </Button>
          }
        >
          {langs.map((lang) => (
            <MenuButton
              key={lang.code}
              fullWidth
              onClick={() => setLang(lang)}
              // Safari fix
              style={{ minHeight: "32px", height: "auto" }}
            >
              {lang.language}
            </MenuButton>
          ))}
        </Dropdown> */}
        <NetWorkConnectButton network={activeNetWork} 
          onShow={onPresentSwitchNetWorkModal}
          onDismiss={() => null}/>
      </SettingsEntry>
      <SocialEntry>
        {/* {cakePriceUsd ? (
          <PriceLink href={priceLink} target="_blank">
            <PancakeRoundIcon width="24px" mr="8px" />
            <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24} />
        )} */}
        <SocialEntryBody>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
            const mr = index < socials.length - 1 ? "18px" : 0;
            if (social.items) {
              return (
                <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} mt="6px" />}>
                  {social.items.map((item) => (
                    <Link external key={item.label} href={item.href} aria-label={item.label} color="borderColor">
                      {item.label}
                    </Link>
                  ))}
                </Dropdown>
              );
            }
            return (
              <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr} mt="6px">
                <Icon {...iconProps} />
              </Link>
            );
          })}
        </SocialEntryBody>
      </SocialEntry>      
    </Container>
  );
};

export default PanelFooter;
