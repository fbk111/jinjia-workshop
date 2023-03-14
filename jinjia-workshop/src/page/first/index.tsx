import React, { useEffect, useRef, useState } from 'react';
import { AppstoreOutlined, NodeIndexOutlined, UserOutlined, MobileOutlined, RocketOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Row, Col, Button, Typography, Divider } from 'antd';
import titleImg from '../../assets/first/title.png'
import right from '../../assets/first/right.png'
import './index.less'
import icon from '../../assets/first/icon.png'
import DemoButton from '../../component/3Dbutton/App.jsx'
import Lottie from 'lottie-web'
import animationData from '../../assets/first/lottie.json'

// 2022-1-9基本完成，还需字体，分页器，axios，100vh
const items: MenuProps['items'] = [
  {
    label: <img style={{ width: '100px', height: '30px' }} src={icon} />,
    key: 6
  },
  {
    label: '首页',
    key: '0',
    icon: <NodeIndexOutlined />,
  },
  {
    label: '荣誉获奖',
    key: '1',
    icon: <AppstoreOutlined />
  },
  {
    label: '项目作品',
    key: '2',
    icon: <MobileOutlined />,
  },
  {
    label: '师生风采',
    key: '3',
    icon: <RocketOutlined />,
  },
  {
    label: '校企合作',
    key: '4',
    icon: <UserOutlined />,
  },
  {
    label: <Button style={{ backgroundColor: '#bb021a' }} type="primary" danger>联系我们</Button>,
    key: '5'
  }

];
const { Text } = Typography;


const App: React.FC<any> = (props: any) => {
  const [current, setCurrent] = useState('0')
  const onClick = (e: any) => {
    props.changePage(e.key)
    setCurrent(e.key);
  };
  useEffect(() => {
    if (props.activeIndex !== undefined) {
      setCurrent(props.activeIndex);
    }

  }, [props.activeIndex])

  const lottieRef = useRef<HTMLDivElement>(null);
  // lottie动画
  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      animation.destroy();
    };
  }, []);


  const demo = {
    width: '100%',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    height: '60px'
  }
  return <div className='firstContent'>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={demo} />
    <div className='firstIn'>
      <Row className='firstRow' align="middle" justify="center">
        <Col span={1}></Col>
        <Col className='firstCol1' lg={{ span: 9 }} xs={{ span: 24 }}
          style={{
            transform: props.pageNumber == 0 ? "none" : "translateX(-200px)",
            opacity: props.pageNumber == 0 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }} >
          <img className='imgOne' src={titleImg}></img>
          <p className='text'>以立德树人为根本任务，以提高技术技能水平为目标，以技能竞赛和横向
            项目为主要抓手，以具体工作任务为驱动，着重培养学员团队协作意识和
            精益求精的工匠精神。
          </p>
          <DemoButton />
        </Col>
        <Col span={1}></Col>
        <Col className='secondCol2' lg={{ span: 11 }} xs={{ span: 24 }}
          style={{
            transform: props.pageNumber == 0 ? "none" : "translateX(200px)",
            opacity: props.pageNumber == 0 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }} >
          {/* <img className='imgTwo' src={right}></img> */}
          {/* 这里挂在Lottie动画 */}
          <div ref={lottieRef}></div>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>

  </div>
};

export default App;