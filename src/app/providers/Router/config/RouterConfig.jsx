import { GoodPage } from '@/pages/GoodPage';
import { GoodsPage } from '@/pages/GoodsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { Navigate } from 'react-router-dom';
import { OrderPage } from '@/pages/OrderPage';

export const AppRoutes = {
  Home: 'Home',
  GoodsPage: 'GoodsPage',
  GoodPage: 'GoodPage',
  OrderPage: 'OrderPage',
  NotFoundPage: 'NotFoundPage',
};

export const RoutesPath = {
  [AppRoutes.Home]: '/',
  [AppRoutes.GoodsPage]: '/goods',
  [AppRoutes.GoodPage]: '/goods/:id',
  [AppRoutes.OrderPage]: '/order',
  [AppRoutes.NotFoundPage]: '*',
};

export const routeConfig = {
  [AppRoutes.Home]: {
    path: RoutesPath.Home,
    element: <Navigate to={RoutesPath.GoodsPage} replace />,
  },
  [AppRoutes.GoodsPage]: {
    path: RoutesPath.GoodsPage,
    element: <GoodsPage />,
    hasLayout: true,
  },
  [AppRoutes.GoodPage]: {
    path: RoutesPath.GoodPage,
    element: <GoodPage />,
    hasLayout: true,
  },
  [AppRoutes.OrderPage]: {
    path: RoutesPath.OrderPage,
    element: <OrderPage />,
  },
  [AppRoutes.NotFoundPage]: {
    path: RoutesPath.NotFoundPage,
    element: <NotFoundPage />,
    hasLayout: true,
  },
};
