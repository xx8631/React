//高阶组件  withRouter
import React from 'react';
import { RouterContext } from './Context';
const withRouter = WrappedComponent => props => {
  return (
    <RouterContext.Consumer>
      {context =>
        <WrappedComponent {...props} {...context}/>}
    </RouterContext.Consumer>
  );
}
export default withRouter;