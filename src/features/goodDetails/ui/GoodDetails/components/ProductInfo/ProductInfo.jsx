import { Typography } from '@mui/material';

export const ProductInfo = ({ name, description }) => {
  return (
    <>
      <Typography>{name}</Typography>
      <Typography>{description}</Typography>
    </>
  );
};
