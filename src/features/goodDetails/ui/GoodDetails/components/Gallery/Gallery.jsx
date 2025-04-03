import { Stack } from '@mui/material';
import { GalleryItem } from './GalleryItem';
import classes from './Gallery.module.scss';

export const Gallery = ({ images, selectedImage, onSelect }) => {
  if (!images || images.length === 0) return null;

  return (
    <Stack className={classes.galleryContainer}>
      {images.map((image) => (
        <GalleryItem
          key={image}
          image={image}
          isActive={selectedImage === image}
          chooseImage={() => onSelect(image)}
        />
      ))}
    </Stack>
  );
};
