import Header from 'components/Header';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const IssuesPage = lazy(() => import('pages/issues/IssuesPage'));

function Routing() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Header />
        <Routes>
          <Route path="/" element={<IssuesPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default Routing;
