import React, { useState } from 'react';
import { AppstoreOutlined, NodeIndexOutlined, UserOutlined,MobileOutlined,RocketOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Row, Col, Button, Typography, Divider } from 'antd';
import titleImg from '../../assets/first/title.png'
import right from '../../assets/first/right.png'
import './index.less'
import icon from '../../assets/first/icon.png'
// 2022-1-9基本完成，还需字体，分页器，axios，100vh
const items: MenuProps['items'] = [
  {
    label: <img style={{ width: '100px', height: '30px'}} src={icon} />,
    key: 0
  },
  {
    label: '首页',
    key: 1,
    icon: <NodeIndexOutlined />,
  },
  {
    label: '荣誉获奖',
    key: 2,
    icon: <AppstoreOutlined />
  },
  {
    label: '项目作品',
    key: 3,
    icon:<MobileOutlined />,
  },
  {
    label: '师生风采',
    key:4,
    icon: <RocketOutlined />,
  },
  {
    label: '校企合作',
    key: 5,
    icon: <UserOutlined />,
  },
  {
    label: <Button style={{ backgroundColor: '#bb021a' }} type="primary" danger>联系我们</Button>,
    key: 6
  }

];
const { Text } = Typography;
const App: React.FC = () => {
  const [current, setCurrent] = useState('1');

  const onClick: MenuProps['onClick'] = (e: MouseEvent) => {

    setCurrent(e.key);
  };
  const demo = {
    width:'100%',
    display:'flex',
    justifyContent:'center'
  }
  return <div className='container' style={{ backgroundColor: 'white' }}>

    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={demo} />;

    <div className='content'>
      <Row justify="center" align="top">
        <Col span={2}>

        </Col>
        <Col span={9}>
          <div style={{ width: '600px', marginTop: '100px' }}>
            <img style={{ width: '600px', height: '300px' }} src={titleImg}></img>
            <div>
              <Text style={{fontSize:'18px'}}>以立德树人为根本任务，以提高技术技能水平为目标，以技能竞赛和横向
                项目为主要抓手，以具体工作任务为驱动，着重培养学员团队协作意识和
                精益求精的工匠精神。</Text>
            </div>
            <Divider />
            <Button style={{ backgroundColor: '#bb021a' }} type="primary" danger>了解更多工坊信息</Button>
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