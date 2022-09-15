import Header from 'components/Header';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Path from './Path';

const IssuesPage = lazy(() => import('pages/issues/IssuesPage'));

function Routing() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Header />
        <Routes>
          <Route path={Path.ISSUES} element={<IssuesPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default Routing;
