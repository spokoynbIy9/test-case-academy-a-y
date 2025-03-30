import { ImageListItem, Stack } from '@mui/material';

export const ImageList = (props) => {
  const { images } = props;
  return (
    <Stack>
      {images.map((item) => (
        <ImageListItem key={item}>
          <img src={item} loading="lazy" />
        </ImageListItem>
      ))}
    </Stack>
  );
};
