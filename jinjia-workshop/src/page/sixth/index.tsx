import React, { useEffect, useRef } from 'react'
import './index.less'
import { Typography } from 'antd'
import { useInView } from "framer-motion";
const { Title, Text } = Typography

export default function index(props: object) {
  const refSix = useRef(null)
  const showSix = useInView(refSix);
  return (
    <div className='sixContent' >
      <div className='sixIn' >
        <div className='header' 
          style={{
            transform: props.pageNumber==5 ? "none" : "translateX(500px)",
            opacity: props.pageNumber==5 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}>
          <p className='header1'>联系我们</p>
          <p className='header2'>Contact us</p>
        </div>
      </div>

    </div>
  )
}
