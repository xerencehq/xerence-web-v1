import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: Image | undefined) => {
  if (!source?.asset?._ref) {
    return undefined;
  }
  return imageBuilder.image(source).auto('format').fit('max');
};

export const urlForImageWithDimensions = (
  source: Image | undefined,
  width: number,
  height: number
) => {
  if (!source?.asset?._ref) {
    return undefined;
  }
  return imageBuilder
    .image(source)
    .width(width)
    .height(height)
    .auto('format')
    .fit('crop');
};
