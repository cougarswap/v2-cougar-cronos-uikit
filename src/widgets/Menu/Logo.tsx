import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/Svg";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 250px;
    display: none;
    svg {
      width: 50px;
    }
    ${({ theme }) => theme.mediaQueries.nav} {
      display: flex;
    }
  }
`;

const TopHeaderLogo = styled(Flex)`
  align-items: center;  
  span {
    margin-left: 15px;
    text-transform: upper-case;
    color: ${({ theme }) => theme.colors.text};
    text-shadow: 0 0 20px ${({ theme }) => theme.colors.contrast};
    font-size: 1.5em;
  }
`

const TopLogoContainer = styled(Flex)`
  align-items: center;
`

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <TopHeaderLogo className="desktop-icon">
        <LogoIcon />
        <span>COUGAR SWAP</span>
      </TopHeaderLogo>
    </>
  );

  return (
    <TopLogoContainer>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </TopLogoContainer>
  );
};

export default Logo;
