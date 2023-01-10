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
window.addEventListener('scroll',(e)=>{
  console.log('监听',e.target)
})
//滑动和分页器和字体
const App: FC = () => (
  <div className="App">
    <First />
    <Second />
    <Third />
    <Forth />
    <Fifth />
    <Sixth />
    <FloatButton.BackTop type='primary' style={{height:'50px'}} shape='square'  />
  </div>
);

export default App;