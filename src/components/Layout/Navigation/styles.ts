import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li``;

interface NavLinkProps {
  $isActive: boolean;
}

export const NavLink = styled.a<NavLinkProps>`
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.white : theme.colors.linkColor};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  padding: ${({ theme }) => theme.spacing[2]} 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform ${({ theme }) => theme.transitions.fast};

    ${({ $isActive }) =>
      $isActive &&
      css`
        transform: scaleX(1);
        transform-origin: left;
      `}
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;
