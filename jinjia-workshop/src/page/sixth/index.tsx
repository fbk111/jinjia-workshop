import React, { useEffect, useRef, useState } from 'react'
import './index.less'
import { Typography } from 'antd'
import { useInView } from "framer-motion";
const { Title, Text } = Typography
import code from '../../assets/sixth/code.png'

export default function index(props: any) {
  const refSix = useRef(null)
  const showSix = useInView(refSix);
  //初始值
  let startWidth = document.documentElement.clientWidth
  const [isShowCom, setIsShowCom] = useState<boolean>(startWidth <= 576 ? false : true)
  return (
    <>
      <div className='sixContent' style={{ display: isShowCom ? 'block' : 'none' }} >
        <div className='sixIn' >
          <div className='header'
            style={{
              transform: props.pageNumber == 5 ? "none" : "translateX(500px)",
              opacity: props.pageNumber == 5 ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}>
            <p className='header1'>联系我们</p>
            <p className='header2'>Contact us</p>
          </div>
        </div>
      </div>
      <div className='sixMobile' style={{ display: !isShowCom ? 'block' : 'none' }}>
        <div className='header'
          style={{
            transform: props.pageNumber == 5 ? "none" : "translateX(500px)",
            opacity: props.pageNumber == 5 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}>
          <p className='header1'>联系我们</p>
          <p className='header2'>Contact us</p>
        </div>
        <div className='sixMobileIn'>

          <div className="sixCard">
            <div className="sixImgBx">
              <img src={code} />
            </div>
            <div className="sixContentMobile">
              <div className="details">
                <h2>祝老师<br /><span>电话：13672079956</span></h2>
                <div className="data">
                  <h3>通讯地址<br /><span>天津市海河教育园区雅深路4号软件楼C310</span></h3>
                </div>
                <div className="actionBtn">
                  <button className='sixMobileButton'>Follow</button>
                  <button className='sixMobileButton'>Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}