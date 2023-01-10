import React from 'react';
import { Carousel, Card, FloatButton, Button, Typography } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/swiper-bundle.css';
import './index.less'
import certificate1 from '../../assets/seconds/certificate1.png'
import certificate2 from '../../assets/seconds/certificate2.png'
import certificate3 from '../../assets/seconds/certificate3.png'
import certificate4 from '../../assets/seconds/certificate4.png'
import certificate5 from '../../assets/seconds/certificate5.png'
import certificate6 from '../../assets/seconds/certificate6.png'
import award1 from '../../assets/seconds/award1.png'
const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const { Meta } = Card;
const { Title, Text } = Typography;
const certificateList = [certificate1, certificate2, certificate3, certificate4, certificate5, certificate6]
const imgList = [
  {
    img: '',
    p: '齐瓒获2020年中华人民共和国第一届职业技能大赛铜牌。',
    button: '国家级'
  },
  {
    img: '',
    p: '齐瓒获2020年中华人民共和国第一届职业技能大赛铜牌。',
    button: '国家级'
  },
  {
    img: '',
    p: '齐瓒获2020年中华人民共和国第一届职业技能大赛铜牌。',
    button: '国家级'
  },
  {
    img: '',
    p: '齐瓒获2020年中华人民共和国第一届职业技能大赛铜牌。',
    button: '国家级'
  }
]

const App: React.FC = () => (
  <div className='container' style={{ backgroundColor: 'white' }}>
    <div className='secondIn' >

      <div className='header' style={{ width: '100%', height: '170px', marginTop: '50px' }}>
        <Title style={{ margin: '0px', fontSize: '56px' }}>荣誉获奖证书</Title>
        <Title style={{ margin: '0px', color: 'white', fontSize: '40px', textShadow: '1px 1px 1px black' }}>Honorary Award</Title>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        pagination={{
          el: '.swiper-pagination',
        }}
        Navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: 'disable'
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ width: '100%', height: '400px', marginBottom: '100px' }}
      >
        {
          imgList.map(item => (
            <SwiperSlide>
              <Card
                bordered
                hoverable
                cover={<img style={{ width: '90%', borderRadius: '10px', height: '250px', display: 'block', margin: '10px auto' }} alt="example" src={award1} />}
              >
                <Text>
                  {item.p}
                </Text>

                <Button type="primary" style={{ display: 'block', margin: '0 auto',backgroundColor:'#bb021a' }} danger>{item.button}</Button>
              </Card>
            </SwiperSlide>
          ))
        }
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        Navigation={true}
        modules={[Navigation]}
        style={{ height: '180px' }}

      >
        {
          certificateList.map(item => (
            <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={item} />
            </SwiperSlide>
          ))
        }

      </Swiper>
    </div>


  </div>

);

export default App;