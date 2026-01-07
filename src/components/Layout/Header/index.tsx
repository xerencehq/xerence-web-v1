'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../Navigation';
import MobileMenu from '../MobileMenu';
import { NAV_LINKS, CTA_LINK } from './constants';
import {
  HeaderWrapper,
  HeaderContainer,
  Logo,
  LogoText,
  CTAButton,
  MenuButton,
  MenuIcon,
} from './styles';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <HeaderWrapper
        $isScrolled={isScrolled}
        data-testid="header"
        as={motion.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <HeaderContainer>
          <Logo href="/" aria-label="Xerence Home">
            <LogoText>Xerence</LogoText>
          </Logo>

          <Navigation links={NAV_LINKS} currentPath={pathname} />

          <CTAButton
            href={CTA_LINK.href}
            as={Link}
            data-testid="header-cta"
          >
            {CTA_LINK.label}
          </CTAButton>

          <MenuButton
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            data-testid="mobile-menu-button"
          >
            <MenuIcon $isOpen={isMobileMenuOpen}>
              <span />
              <span />
              <span />
            </MenuIcon>
          </MenuButton>
        </HeaderContainer>
      </HeaderWrapper>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            links={NAV_LINKS}
            ctaLink={CTA_LINK}
            currentPath={pathname}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
