'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { urlForImage } from '@/sanity/lib/image';
import type { SanityImage } from '@/types/sanity';
import {
  GalleryWrapper,
  GalleryTitle,
  GalleryGrid,
  GalleryItem,
  Lightbox,
  LightboxContent,
  LightboxClose,
} from './styles';

export interface ProjectGalleryProps {
  images: SanityImage[];
  projectTitle: string;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  images,
  projectTitle,
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleClose = () => setSelectedImage(null);

  const handleLightboxClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <GalleryWrapper data-testid="project-gallery">
      <GalleryTitle>Project Gallery</GalleryTitle>

      <GalleryGrid>
        {images.map((image, index) => {
          const imageUrl = urlForImage(image)?.width(600).height(400).url();
          if (!imageUrl) return null;

          return (
            <GalleryItem
              key={index}
              as={motion.button}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(index)}
              type="button"
            >
              <Image
                src={imageUrl}
                alt={image.alt || `${projectTitle} screenshot ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </GalleryItem>
          );
        })}
      </GalleryGrid>

      <AnimatePresence>
        {selectedImage !== null && (
          <Lightbox
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleLightboxClick}
            data-testid="lightbox"
          >
            <LightboxContent as={motion.div} initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
              <Image
                src={urlForImage(images[selectedImage])?.width(1200).url() || ''}
                alt={images[selectedImage].alt || `${projectTitle} screenshot`}
                width={1200}
                height={800}
                style={{ objectFit: 'contain', maxHeight: '80vh', width: 'auto' }}
              />
            </LightboxContent>
            <LightboxClose onClick={handleClose} aria-label="Close lightbox">
              ×
            </LightboxClose>
          </Lightbox>
        )}
      </AnimatePresence>
    </GalleryWrapper>
  );
};
