import React from 'react';
import { Card, Col, Row, Avatar,Typography } from 'antd';
const { Meta } = Card;
const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};
const {Title,Text}=Typography
const schoolList=[
  {
    title:'横向课题',
    description:'客户将软件项目整体交由工坊师生团队开发，工坊组建项目开发团队，独立完成项目开发，并保质如期交付。'
  },
  {
    title:'横向课题',
    description:'客户将软件项目整体交由工坊师生团队开发，工坊组建项目开发团队，独立完成项目开发，并保质如期交付。'
  },
  {
    title:'横向课题',
    description:'客户将软件项目整体交由工坊师生团队开发，工坊组建项目开发团队，独立完成项目开发，并保质如期交付。'
  }
]
const componyList=[
  {
    name:'人人众包（天津）科技有限公司'
  },
  {
    name:'人人众包（天津）科技有限公司'
  },
  {
    name:'人人众包（天津）科技有限公司'
  },
  {
    name:'人人众包（天津）科技有限公司'
  },
  {
    name:'人人众包（天津）科技有限公司'
  },
  {
    name:'人人众包（天津）科技有限公司'
  }
]
const App: React.FC = () => (
  <>
    <div className='container'>
      <div className='fifthIn' style={{width:'90%',margin:'0 auto'}}>
        <div className='header' style={{margin:'50px 0 50px 0'}}>
        <Title style={{margin:'0px',fontSize:'56px'}}>校企合作</Title>
        <Title style={{margin:'0px',color:'white',fontSize:'40px',textShadow:'1px 1px 1px black'}}>Cooperation</Title>
        </div>
        <div className='school'>
          <Row gutter={16}>
            {
              schoolList.map(item=>(
                <Col span={8}>
                <Card style={{ height: 230 }} bordered hoverable title={item.title} extra={<a href="#">More</a>}>
                  {item.description}
                </Card>
              </Col>
              ))
            }
          </Row>
        </div>
        <div className='header' style={{margin:'50px 0 50px 0'}}>
        <Title style={{margin:'0px',fontSize:'56px'}}>合作企业</Title>
        <Title style={{margin:'0px',color:'white',fontSize:'40px',textShadow:'1px 1px 1px black'}}>Cooperative enterprises</Title>
        </div>
        <div className='compony'>
          <Row gutter={[16, 24]}>
            {
              componyList.map(item=>(
                <Col className="gutter-row" span={8}>
                <Card  bordered hoverable>
                  <Text>{item.name}</Text>
                </Card>
              </Col>
              ))
            }
          </Row>
        </div>
      </div>

    </div>

  </>
);

export default App;