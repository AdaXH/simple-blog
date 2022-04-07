import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import routes from '@/config/router.config';
import { useLoadComponent, useMount } from '@/util/hooks';
import { UserCtx } from './contexts';
import { getUserInfo } from './service';
// import { Layout } from '@/layout';

function RoutesApp() {
  const [user, setUser] = useState<User | null>(null);
  useMount(async () => {
    const data = await getUserInfo();
    setUser(data);
  });
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <UserCtx.Provider value={user}>
        <Routes>
          {routes.map(({ Component, path }) => (
            <Route key={path} element={useLoadComponent(Component)} path={path} />
          ))}
        </Routes>
      </UserCtx.Provider>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default RoutesApp;
