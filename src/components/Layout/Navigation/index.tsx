'use client';

import React from 'react';
import Link from 'next/link';
import type { NavLink as NavLinkType } from '../Header/constants';
import { Nav, NavList, NavItem, NavLink as StyledNavLink } from './styles';

interface NavigationProps {
  links: readonly NavLinkType[];
  currentPath: string;
}

const Navigation: React.FC<NavigationProps> = ({ links, currentPath }) => {
  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  return (
    <Nav data-testid="desktop-navigation">
      <NavList>
        {links.map((link) => (
          <NavItem key={link.href}>
            <StyledNavLink
              href={link.href}
              as={Link}
              $isActive={isActive(link.href)}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </StyledNavLink>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default Navigation;
