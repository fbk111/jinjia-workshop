import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, NodeIndexOutlined, UserOutlined, MobileOutlined, RocketOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Row, Col, Button, Typography, Divider } from 'antd';
import titleImg from '../../assets/first/title.png'
import right from '../../assets/first/right.png'
import './index.less'
import icon from '../../assets/first/icon.png'
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
const App: React.FC = (props) => {
  const [current, setCurrent] = useState('0')
  const onClick: MenuProps['onClick'] = (e: MouseEvent) => {
    props.changePage(e.key)
    setCurrent(e.key);
  };
  useEffect(() => {
    setCurrent(props.activeIndex)
  }, [props.activeIndex])
  const demo = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
  return <div className='firstContent'>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={demo} />
    <Row className='firstRow' align="middle" justify="center">
      <Col span={1}></Col>
      <Col lg={{ span: 9 }} xs={{ span: 24 }}  >
        <img className='imgOne' src={titleImg}></img>
        <p className='text'>以立德树人为根本任务，以提高技术技能水平为目标，以技能竞赛和横向
          项目为主要抓手，以具体工作任务为驱动，着重培养学员团队协作意识和
          精益求精的工匠精神。
        </p>
        <Divider />
        <Button style={{ backgroundColor: '#bb021a' }} className='button' type="primary" danger>了解更多工坊信息</Button>
      </Col>
      <Col span={1}></Col>
      <Col lg={{ span: 11 }} xs={{ span: 24 }}>
        <img className='imgTwo' src={right}></img>
      </Col>
      <Col span={2}></Col>
    </Row>
  </div>
};

export default App;