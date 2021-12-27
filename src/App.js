import logo from './logo.svg';
import useCustomHook from './customhook';
import './App.css';
import UseEffectHook from './useEffect';
import Refhook from './useRef';
import ContextHook from './useContext';
import UseReducerHook from './useReducer';
import CallbackHook from './callbackHook';
import UsememoHook from './useMemo';
import React from 'react';

function App() {
  const data = useCustomHook()
  return (
    <div className="App">
    <UseEffectHook />
    <Refhook />
    <ContextHook/>
    <UseReducerHook />
    <CallbackHook />
    <UsememoHook />
    <React.Fragment>
      <h1>Count Up:{data.count}</h1>
      <button type="button" onClick={data.handleIncrement}>Increment</button>
    </React.Fragment>
    </div>
  );
}
export default App;
