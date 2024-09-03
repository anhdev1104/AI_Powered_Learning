import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from '@/pages/home/HomePage';
import MainLayout from '@/components/layouts/MainLayout';
import PremiumPage from '@/pages/premium/PremiumPage';
import AuthPage from '@/pages/auth/AuthPage';
import LearningPage from '@/pages/learning/LearningPage';

const clientRouter = [
  {
    path: '/learning',
    element: LearningPage,
    title: 'Daddy learning',
  },
  {
    path: '/premium',
    element: PremiumPage,
    title: 'Daddy Premium',
  },
  {
    path: '/',
    element: HomePage,
    title: 'Daddy Education',
  },
];

const authRouter = [
  {
    path: '/auth',
    element: AuthPage,
    title: 'Daddy Auth',
  },
];

export default function AppRouter() {
  const location = useLocation();

  useEffect(() => {
    const route = clientRouter.find(route => {
      const routePath = route.path.replace(/:\w+/g, ''); // loại bỏ các phần có :id
      return location.pathname.startsWith(routePath);
    });
    if (route && route.title) {
      document.title = route.title;
    }
  }, [location]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {clientRouter.map(route => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
      </Route>
      {authRouter.map(route => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
}
