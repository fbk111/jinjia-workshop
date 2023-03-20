import { useState, useEffect } from 'react'
import './index.less'
import { motion } from "framer-motion";
import { Card, Button, Skeleton } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';
import forth1 from '../../assets/forth/01.png'
import forth2 from '../../assets/forth/02.png'
import forth3 from '../../assets/forth/03.png'
import forth4 from '../../assets/forth/04.png'
import forth5 from '../../assets/forth/05.png'
import forth6 from '../../assets/forth/06.png'
import forth7 from '../../assets/forth/07.png'
export default function index(props: any) {
  const [teacherList, setTeacherList] = useState<Array<object>>([])
  useEffect(() => {
    setTeacherList(forthList)
  }, [])
  const forthList = [
    {
      "index": 41,
      "img": forth1,
      "name": "祝文飞",
      "description": "天津市五一劳动奖章获得者。多年企业一线软件开发经验，专业方向：移动应用开发。指导学生多次获得国家级竞赛奖项。"
    },
    {
      "index": 42,
      "img": forth2,
      "name": "王宝帅",
      "description": "天津市五一劳动奖章获得者。多年企业一线软件开发经验，专业方向：移动应用开发。指导学生多次获得国家级竞赛奖项。"
    },
    {
      "index": 43,
      "img": forth3,
      "name": "刘洋",
      "description": "天津市五一劳动奖章获得者。多年企业一线软件开发经验，专业方向：移动应用开发。指导学生多次获得国家级竞赛奖项。"
    },
    {
      "index": 44,
      "img": forth4,
      "name": "刘宇",
      "description": "天津市五一劳动奖章获得者。多年企业一线软件开发经验，专业方向：移动应用开发。指导学生多次获得国家级竞赛奖项。"
    },
    {
      "index": 45,
      "img": forth5,
      "name": "吴涛",
      "description": "天津市五一劳动奖章获得者。多年企业一线软件开发经验，专业方向：移动应用开发。指导学生多次获得国家级竞赛奖项。"
    },
    {
      "index": 46,
      "img": forth6,
      "name": "刘景鸿",
      "description": "天津市五一劳动奖章获得者。多年企业一线软件开发经验，专业方向：移动应用开发。指导学生多次获得国家级竞赛奖项。"
    },
    {
      "index": 47,
      "img": forth7,
      "name": "刘宇",
      "description": "天津市五一劳动奖章获得者。多年企业一线软件开发经验，专业方向：移动应用开发。指导学生多次获得国家级竞赛奖项。"
    }
  ]
  let loading = () => teacherList.length == 0 ? true : false
  return (
    <div className='forthContent'>
      <div className='forthIn'>
        <div className='header'
          style={{
            transform: props.pageNumber == 3 ? "none" : "translateX(500px)",
            opacity: props.pageNumber == 3 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}>
          <p className='header1'>师生风采</p>
          <p className='header2'>Elegant demeanour</p>
        </div>
        <div className='teacherList'>
          <Skeleton paragraph={{ rows: 20 }} loading={loading()} round active>
            <Swiper
              slidesPerView={4}
              spaceBetween={40}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                disabledClass: 'disable'
              }}
              modules={[Pagination, Navigation]}
              className='forthSwiper'

            >
              {
                teacherList.map((item: any, index) => (
                  <SwiperSlide key={item.index}
                    style={{
                      transform: props.pageNumber == 3 ? "none" : "translateX(-500px)",
                      opacity: props.pageNumber == 3 ? 1 : 0,
                      transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                    }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Card
                        bordered
                        hoverable
                        style={{ width: '90%' }}
                        cover={<img src={item.img} className='img' />}
                      >
                        <Button style={{ display: 'block', margin: '0 auto', backgroundColor: '#bb021a' }} type="primary" danger>{item.name}</Button>
                        <br />
                        <p className='content' style={{ display: 'block' }}>{item.description}</p>
                      </Card>
                    </motion.div>
                  </SwiperSlide>
                ))
              }
              <div className="swiper-button-prev">
                <img src={props.last} />
              </div>
              <div className="swiper-button-next">
                <img src={props.next} />
              </div>
            </Swiper>
          </Skeleton>

        </div>
      </div>
    </div>
  )
}
