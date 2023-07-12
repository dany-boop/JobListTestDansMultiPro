import { lazy, Suspense, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getUsername } from '../store/reducers/login';

export default function Home() {
  const Dashboard = lazy(() => import('./dashboard'));
  const Detail = lazy(() => import('./detail'));
  const username = useSelector(getUsername);
  const validate = useCallback(() => {
    if (username !== 'brian') return <Navigate to={'/login'} />;
  }, [username]);
  validate();
  return (
    <div>
      <Suspense>
        <Routes>
          <Route exact path="/summary" name="Summary" element={<Dashboard />} />
          <Route exact path="summary/:id" name="Detail" element={<Detail />} />
        </Routes>
      </Suspense>
    </div>
  );
}
