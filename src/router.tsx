import { Route, Routes, BrowserRouter } from 'react-router-dom';
import routes from '@/config/router.config';
import { useLoadComponent } from '@/util/hooks';
import { Layout } from '@/layout';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(({ Component, path }) => (
            <Route key={path} element={useLoadComponent(Component)} path={path} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default RoutesApp;
