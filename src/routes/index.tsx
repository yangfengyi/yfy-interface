import PageNotFoundView from '@components/common/PageNotFoundView';
import MainLayout from '@layouts/MainLayout';
import HomePage from '@pages/Home';
import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

const About = lazy(() => import('@pages/About'));

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

const aboutRoutes: RouteObject = {
  path: '/about',
  element: (
    <Suspense>
      <MainLayout />
    </Suspense>
  ),
  children: [
    {
      path: '',
      element: <About />,
    },
  ],
};

Routes.push(mainRoutes);
Routes.push(aboutRoutes);

export default Routes;
