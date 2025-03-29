import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/RouterConfig';
import { Layout } from '@/widgets/Layout';

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map((route) => {
        const element = route.hasLayout ? (
          <Layout>{route.element}</Layout>
        ) : (
          route.element
        );
        return <Route key={route.path} path={route.path} element={element} />;
      })}
    </Routes>
  );
};

export default AppRouter;
