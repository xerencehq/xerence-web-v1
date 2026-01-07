'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { NavLink } from '../Header/constants';
import {
  MenuOverlay,
  MenuContent,
  MenuList,
  MenuItem,
  MenuLink,
  MenuCTA,
} from './styles';

interface MobileMenuProps {
  links: readonly NavLink[];
  ctaLink: { label: string; href: string };
  currentPath: string;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const menuVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  links,
  ctaLink,
  currentPath,
  onClose,
}) => {
  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  return (
    <MenuOverlay
      as={motion.div}
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
      data-testid="mobile-menu"
    >
      <MenuContent
        as={motion.div}
        variants={menuVariants}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <MenuList>
          {links.map((link) => (
            <MenuItem
              key={link.href}
              as={motion.li}
              variants={itemVariants}
            >
              <MenuLink
                href={link.href}
                as={Link}
                $isActive={isActive(link.href)}
                onClick={onClose}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </MenuLink>
            </MenuItem>
          ))}
          <MenuItem as={motion.li} variants={itemVariants}>
            <MenuCTA href={ctaLink.href} as={Link} onClick={onClose}>
              {ctaLink.label}
            </MenuCTA>
          </MenuItem>
        </MenuList>
      </MenuContent>
    </MenuOverlay>
  );
};

export default MobileMenu;
