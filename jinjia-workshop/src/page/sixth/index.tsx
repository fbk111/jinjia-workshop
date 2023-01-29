import React from 'react'
import './index.less'
import {Typography} from 'antd'
const {Title,Text} = Typography
export default function index(props:object) {
  return (
    <div className='sixTh'>
         <div className='header' style={{padding:'50px 0 50px 0'}}>
         <Title style={{margin:'0px',fontSize:'18px'}}>联系我们</Title>
        <Title style={{margin:'0px',color:'white',fontSize:'40px',textShadow:'1px 1px 1px grey'}}>Contact us</Title>
         </div>
    </div>
  )
}
