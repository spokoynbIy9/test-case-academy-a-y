import { Suspense } from 'react';
import classes from './Suspense.module.scss';
import { Box, CircularProgress } from '@mui/material';

export const CustomSuspense = ({ children }) => (
  <Suspense
    fallback={
      <Box className={classes.suspenseContainer}>
        <CircularProgress />
      </Box>
    }
  >
    {children}
  </Suspense>
);
