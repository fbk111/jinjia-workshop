import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Row, Col, Button } from 'antd';
import titleImg from '../../assets/first/title.png'
import right from '../../assets/first/right.png'
import './index.less'
const items: MenuProps['items'] = [
  {
    label: '首页',
    key: 'first',
    icon: <MailOutlined />,
  },
  {
    label: '荣誉获奖',
    key: 'second',
    icon: <AppstoreOutlined />
  },
  {
    label: '项目作品',
    key: 'third',
    icon: <SettingOutlined />,
  },
  {
    label: '师生风采',
    key: 'forth',
    icon: <SettingOutlined />,
  },
  {
    label: '校企合作',
    key: 'fifth',
    icon: <SettingOutlined />,
  }
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e: MouseEvent) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const demo = {
    textAlign: 'center'
  }
  return <div className='container' style={{backgroundColor:'white'}}>
    <div style={demo}>
      <Menu align="center" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
    </div>
    <div className='content'>
      <Row justify="center" align="top">
        <Col span={2}>

        </Col>
        <Col span={9}>
          <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <img style={{ width: '600px', height: '300px' }} src={titleImg}></img>
            <p style={{width:'600px',fontSize:'20px'}}>
              以立德树人为根本任务，以提高技术技能水平为目标，以技能竞赛和横向
              项目为主要抓手，以具体工作任务为驱动，着重培养学员团队协作意识和
              精益求精的工匠精神。
            </p>
            <Button type="primary" danger>了解更多工坊信息</Button>
          </div>

        </Col>
        <Col span={11}>
          <img style={{ width: '860px', height: '720px' }} src={right}></img>
        </Col>
        <Col span={2}>

        </Col>
      </Row>
    </div>
  </div>
};

export default App;