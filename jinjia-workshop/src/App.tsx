import React, { FC } from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import First from './page/first/index'
import Second from './page/second/index'
import Third from './page/third'
import Forth from './page/forth'
import Fifth from './page/fifth'
const App: FC = () => (
  <div className="App">
    <First />
    <Second />
    <Third />
    <Forth />
    <Fifth />
  </div>
);

export default App;