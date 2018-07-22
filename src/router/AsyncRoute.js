import React from 'react';
import DynamicImport from './DynamicImport';

export const AsyncRoute = props => (
  <DynamicImport load={() => import(props.path)}>
    {Component =>
      Component === null ? <p>Loading</p> : <Component {...props} />
    }
  </DynamicImport>
);

export default AsyncRoute;
