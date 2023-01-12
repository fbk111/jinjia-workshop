import React, { FC } from 'react';
import { Button, FloatButton } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import First from './page/first/index'
import Second from './page/second/index'
import Third from './page/third'
import Forth from './page/forth'
import Fifth from './page/fifth'
import Sixth from './page/sixth'
import last from './assets/last.png'
import next from './assets/next.png'
//滑动和分页器和字体
const App: FC = () => (
  <div className="App">
    <First />
    <Second last={last} next={next}/>
    <Third last={last} next={next}/>
    <Forth last={last} next={next} />
    <Fifth />
    <Sixth next={next} last={last} />
    <FloatButton.BackTop type='primary' style={{height:'50px'}} shape='square'  />
  </div>
);

export default App;