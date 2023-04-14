import { Navigate, useRoutes } from 'react-router-dom';
// layouts

//
import Chatts from './pages/Chatts/Chatts';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Chatts/>,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
