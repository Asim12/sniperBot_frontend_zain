import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
import SignupPage from 'src/pages/signup';
import CustomOrdersPage from 'src/sections/custom-orders/view/custom-orders-view';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
// export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const SoldOrdersPage = lazy(() => import('src/pages/soldorders'));
export const BuyOrdersPage = lazy(() => import('src/pages/buyorders'));

export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const isAuthenticated = localStorage.getItem('token'); // Check if the user is authenticated

  const routes = useRoutes([
    {
      element: isAuthenticated ? (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ) : (
        <Navigate to="/login" replace />
      ),
      children: [
        { element: <IndexPage />, index: true },
        {path:'sold-orders',element:<SoldOrdersPage/>},
        {path:'buy-orders',element:<BuyOrdersPage/>},
        {path:'custom-orders',element:<CustomOrdersPage/>},
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path:'register',
      element:<SignupPage/>
    },
  
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
