import React,{useState} from 'react';
// import ContextPage from './pages/reactUse/Context/ContextPage'
// import AntdFom4PageFunc from './pages/reactUse/AntdForm/AntdFom4PageFunc';
// import AntdForm4PageClass from './pages/reactUse/AntdForm/AntdForm4PageClass';
// import MyRCFieldForm from './pages/reactUse/AntdForm/MyRCFieldForm';
//  import DialogPage from './pages/reactUse/DialogPage';
//  import HocPageDecorator from './pages/reactUse/Hoc/HocPageDecorator';
// import reducer from './pages/reactUse/Redux/reducer.js';
// import ReduxPage from './pages/reactUse/Redux/ReduxPage';
// import HooksPage from './pages/reactUse/Hooks/HooksPage';
// import ReactReduxPage from './pages/reactUse/ReactRedux/ReactRedexPage';
// import ReactReduxHookPage from './pages/reactUse/ReactRedux/ReactReduxHookPage';
import ReactRouterPage from './pages/reactUse/ReactRouter/ReactRouterPage';

function App(props) {
  //接收
  const [state,setState]=useState(1);
  return (
    <div className="App">
     <ReactRouterPage/>
    </div>
  );
}

export default App;
