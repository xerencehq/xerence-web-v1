'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { hoverLift } from '@/styles';
import { CardWrapper, CardImage, CardContent, CardTitle, CardDescription, CardFooter } from './styles';

export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  variant?: 'default' | 'featured' | 'compact';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  imageAlt,
  href,
  footer,
  children,
  variant = 'default',
  onClick,
}) => {
  const cardContent = (
    <>
      {image && (
        <CardImage $variant={variant}>
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </CardImage>
      )}
      <CardContent $variant={variant}>
        <CardTitle $variant={variant}>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {children}
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </>
  );

  if (href) {
    return (
      <CardWrapper
        as={motion(Link)}
        href={href}
        $variant={variant}
        $clickable
        whileHover={hoverLift}
        data-testid="card"
      >
        {cardContent}
      </CardWrapper>
    );
  }

  if (onClick) {
    return (
      <CardWrapper
        as={motion.div}
        $variant={variant}
        $clickable
        onClick={onClick}
        whileHover={hoverLift}
        role="button"
        tabIndex={0}
        data-testid="card"
      >
        {cardContent}
      </CardWrapper>
    );
  }

  return (
    <CardWrapper $variant={variant} $clickable={false} data-testid="card">
      {cardContent}
    </CardWrapper>
  );
};

export default Card;
