'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { tapScale } from '@/styles';
import { StyledButton, ButtonContent, LoadingSpinner } from './styles';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  'aria-label'?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  onClick,
  type = 'button',
  className,
  'aria-label': ariaLabel,
}) => {
  const isDisabled = disabled || loading;

  const buttonContent = (
    <ButtonContent $loading={loading}>
      {loading && <LoadingSpinner data-testid="loading-spinner" />}
      {leftIcon && <span className="icon-left">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="icon-right">{rightIcon}</span>}
    </ButtonContent>
  );

  const motionProps = !isDisabled
    ? {
        as: motion.button,
        whileTap: tapScale,
      }
    : {};

  if (href && !isDisabled) {
    return (
      <StyledButton
        as={Link}
        href={href}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        $disabled={false}
        className={className}
        aria-label={ariaLabel}
        data-testid="button"
      >
        {buttonContent}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $disabled={isDisabled}
      className={className}
      aria-label={ariaLabel}
      aria-busy={loading}
      data-testid="button"
      {...motionProps}
    >
      {buttonContent}
    </StyledButton>
  );
};

export default Button;
