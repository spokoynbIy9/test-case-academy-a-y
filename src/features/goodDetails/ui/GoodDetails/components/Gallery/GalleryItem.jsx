import { Stack } from '@mui/material';
import classes from './Gallery.module.scss';

export const GalleryItem = ({ image, isActive, chooseImage }) => {
  return (
    <div
      className={`${classes.imageWrapper} ${isActive ? classes.active : ''}`}
    >
      <img src={image} className={classes.defaultImage} onClick={chooseImage} />
    </div>
  );
};
