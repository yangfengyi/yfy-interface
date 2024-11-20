import PageNotFoundView from '@components/common/PageNotFoundView';
import MainLayout from '@layouts/MainLayout';
import HomePage from '@pages/Home';
import { RouteObject } from 'react-router-dom';

const Routes: RouteObject[] = [];

const mainRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    // 固定的三个Router
    { path: '*', element: <PageNotFoundView /> },
    { path: '404', element: <PageNotFoundView /> },
    { path: '/', element: <HomePage /> },
  ],
};

Routes.push(mainRoutes);

export default Routes;
