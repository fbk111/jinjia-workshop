import React from 'react';
import { Card, Col, Row, Avatar } from 'antd';
const { Meta } = Card;
const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};
const App: React.FC = () => (
  <>
    <div className='container'>
      <div className='fifthIn'>
        <div className='header'>
          <h1>校企合作</h1>
          <h3>Cooperation</h3>
        </div>
        <div className='school'>
          <Row gutter={16}>
            <Col span={8}>
              <Card style={{ height: 200 }} bordered={true} hoverable title="课题组开发" extra={<a href="#">More</a>}>
                客户将软件项目整体交由工坊师生团队开发，工坊组建项目开发团队，独立完成项目开发，并保质如期交付。
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false} hoverable>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false} hoverable>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
        <div className='header'>
          <h1>校企合作</h1>
          <h3>Cooperation</h3>
        </div>
        <div className='compony'>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={8}>
              <Card style={{ width: 300 }}>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="gutter-row" span={8}>
            <Card style={{ width: 300 }}>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="gutter-row" span={8}>
            <Card style={{ width: 300 }}>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="gutter-row" span={8}>
            <Card style={{ width: 300 }}>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="gutter-row" span={8}>
            <Card style={{ width: 300 }}>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="gutter-row" span={8}>
            <Card style={{ width: 300 }}>
                <p>Card content</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

    </div>

  </>
);

export default App;