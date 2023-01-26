import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Avatar, Typography, Skeleton } from 'antd';
import { indexFifth } from '../../request/all.js'
const { Meta } = Card;
const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};
const { Title, Text } = Typography

const App: React.FC = () => {
  const [componyList, setComponyList] = useState([])
  const [schoolList, setSchoolList] = useState([])
  useEffect(() => {
    indexFifth().then(res => {
      setComponyList(res.componyList)
      setSchoolList(res.schoolList)

    })
  }, [])
  let loadingCompony=()=>componyList.length==0?true:false
  let loadingSchool=()=>schoolList.length==0?true:false
  return <>
    <div>
      <div className='fifthIn' style={{ width: '90%', margin: '0 auto' }}>
        <div className='header' style={{ margin: '50px 0 50px 0' }}>
          <Title style={{ margin: '0px', fontSize: '56px' }}>校企合作</Title>
          <Title style={{ margin: '0px', color: 'white', fontSize: '40px', textShadow: '1px 1px 1px grey' }}>Cooperation</Title>
        </div>
        <Skeleton loading={loadingSchool()} active round>
          <div className='school'>
            <Row gutter={24}>
              {
                schoolList.map(item => (
                  <Col lg={{span:8}} xs={{span:24}} key={item.index}>
                    <Card style={{ height: 230 }} bordered hoverable title={item.title} extra={<a href="#">More</a>}>
                      <Text> {item.description}</Text>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </div>
        </Skeleton>

        <div className='header' style={{ margin: '50px 0 50px 0' }}>
          <Title style={{ margin: '0px', fontSize: '56px' }}>合作企业</Title>
          <Title style={{ margin: '0px', color: 'white', fontSize: '40px', textShadow: '1px 1px 1px grey' }}>Cooperative enterprises</Title>
        </div>
        <Skeleton loading={loadingCompony()} active round>
          <div className='compony'>
            <Row gutter={[16, 24]}>
              {
                componyList.map(item => (
                  <Col  className="gutter-row" lg={{span:8}} xs={{span:24}} key={item.index}>
                    <Card bordered hoverable>
                      <Text>{item.name}</Text>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </div>
        </Skeleton>

      </div>

    </div>

  </>
};

export default App;