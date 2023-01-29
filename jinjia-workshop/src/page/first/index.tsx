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
  return <div>

    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={demo} />;

    <div className='content' id='firstContent' style={{ width: '100%',height:'100%' }}>
      <Row justify='center' style={{ width: '100%', height: '100%' }} align="center">
        <Col lg={{ span: 9}} xs={{ span: 20 }} style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
          <div style={{ width: '95%' }}>
            <img style={{ width: '95%', height: 'auto' }} src={titleImg}></img>
            <div>
              <Text style={{ fontSize: '20px' }}>以立德树人为根本任务，以提高技术技能水平为目标，以技能竞赛和横向
                项目为主要抓手，以具体工作任务为驱动，着重培养学员团队协作意识和
                精益求精的工匠精神。</Text>
            </div>
            <Divider />
            <Button style={{ backgroundColor: '#bb021a' }} type="primary" danger>了解更多工坊信息</Button>
          </div>
        </Col>
        <Col lg={{ span: 11 }} xs={{ span: 20 }} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img style={{ width: '80%', height: 'auto' }} src={right}></img>
        </Col>
      </Row>
    </div>
  </div>
};

export default App;