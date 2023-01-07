import React from 'react';
import { Carousel, Card,FloatButton,Button  } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation } from "swiper";
import 'swiper/swiper-bundle.css';
import './index.less'
import certificate1 from '../../assets/seconds/certificate1.png'
import certificate2 from '../../assets/seconds/certificate2.png'
import certificate3 from '../../assets/seconds/certificate3.png'
import certificate4 from '../../assets/seconds/certificate4.png'
import certificate5 from '../../assets/seconds/certificate5.png'
import certificate6 from '../../assets/seconds/certificate6.png'
const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const { Meta } = Card;

const App: React.FC = () => (
  <div className='container' style={{backgroundColor:'white'}}>
    <div className='secondIn' >
      <div className='header' style={{width:'100%',height:'170px'}}>
        <h1 style={{fontSize:'72px',color:'black',margin:'0px'}}>荣誉获奖证书</h1>
        <h2 style={{fontSize:'56px',margin:'0px'}}>水水水水是黑色</h2>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        style={{width:'100%',height:'300px',marginBottom:'150px'}}
      >
        <SwiperSlide>
          <Card
          bordered
            hoverable
            style={{width:'480px',height:'440px'}}
            cover={<img style={{width:'440px',height:'270px'}}  alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <p>
            齐瓒获2020年中华人民共和国第一届职业技能大赛铜牌。
            </p>
            <Button type="primary" danger>国家级</Button>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
          bordered
            hoverable
            style={{width:'480px',height:'440px'}}
            cover={<img style={{width:'440px',height:'270px'}}  alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <p>
            齐瓒获2020年中华人民共和国第一届职业技能大赛铜牌。
            </p>
            <Button type="primary" danger>国家级</Button>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
          bordered
            hoverable
            style={{width:'480px',height:'440px'}}
            cover={<img style={{width:'440px',height:'270px'}}  alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <p>
            齐瓒获2020年中华人民共和国第一届职业技能大赛铜牌。
            </p>
            <Button type="primary" danger>国家级</Button>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
          bordered
            hoverable
            style={{width:'480px',height:'440px'}}
            cover={<img style={{width:'440px',height:'270px'}}  alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <p>
            齐瓒获2020年中华人民共和国第一届职业技能大赛铜牌。
            </p>
            <Button type="primary" danger>国家级</Button>
          </Card>
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        Navigation={true}
        modules={[Navigation]}
        style={{height:'180px'}}

      >
        <SwiperSlide >
          <img src={certificate1}></img>
        </SwiperSlide>
        <SwiperSlide >
        <img src={certificate2}></img>
        </SwiperSlide>
        <SwiperSlide >
        <img src={certificate3}></img>
        </SwiperSlide>
        <SwiperSlide >
        <img src={certificate4}></img>
        </SwiperSlide>
        <SwiperSlide >
        <img src={certificate5}></img>
        </SwiperSlide>
        <SwiperSlide >
        <img src={certificate6}></img>
        </SwiperSlide>
      </Swiper>
    </div>
    <FloatButton.BackTop />


  </div>

);

export default App;