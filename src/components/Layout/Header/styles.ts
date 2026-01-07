import styled, { css } from 'styled-components';
import Link from 'next/link';
import { glassMorphism, flexBetween, containerStyles } from '@/styles';

interface HeaderWrapperProps {
  $isScrolled: boolean;
}

export const HeaderWrapper = styled.header<HeaderWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  height: 64px;
  transition: all ${({ theme }) => theme.transitions.normal};

  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      ${glassMorphism}
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 80px;
  }
`;

export const HeaderContainer = styled.div`
  ${containerStyles}
  ${flexBetween}
  height: 100%;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 10;
`;

export const LogoText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.02em;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

export const CTAButton = styled.a`
  display: none;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline-flex;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  border-radius: ${({ theme }) => theme.borderRadius.md};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

interface MenuIconProps {
  $isOpen: boolean;
}

export const MenuIcon = styled.div<MenuIconProps>`
  width: 24px;
  height: 20px;
  position: relative;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 2px;
    transition: all ${({ theme }) => theme.transitions.fast};

    &:nth-child(1) {
      top: 0;
      ${({ $isOpen }) =>
        $isOpen &&
        css`
          top: 9px;
          transform: rotate(45deg);
        `}
    }

    &:nth-child(2) {
      top: 9px;
      ${({ $isOpen }) =>
        $isOpen &&
        css`
          opacity: 0;
        `}
    }

    &:nth-child(3) {
      top: 18px;
      ${({ $isOpen }) =>
        $isOpen &&
        css`
          top: 9px;
          transform: rotate(-45deg);
        `}
    }
  }
`;
