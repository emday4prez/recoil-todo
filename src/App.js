import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList';

const App = () => {
 return (
  <RecoilRoot>
   <div>
   <h1>App</h1>
   <TodoList/>
  </div>
  </RecoilRoot>
  
 )
}

export default App;