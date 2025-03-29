import { Box } from '@mui/material';
import { Topbar } from '@/widgets/Topbar';

const Layout = ({ children }) => {
  return (
    <Box className="page-wrapper">
      <Topbar />
      <Box component="main" py={6}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
