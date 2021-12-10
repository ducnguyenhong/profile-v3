import LoadableUI from 'layout/loadable-ui';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('page/home'));

export default function MainRouter() {
  return (
    <Router>
      <Suspense fallback={LoadableUI}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
