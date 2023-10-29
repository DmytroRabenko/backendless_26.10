import React, { lazy, Suspense } from 'react';

const LazyLoadComponent = ({ path }) => {
  const LazyComponent = lazy(() => import(`../../${path}`));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};
export default LazyLoadComponent;
