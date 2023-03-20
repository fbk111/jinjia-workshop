import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Row, Col, Button, Skeleton } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import { indexThird } from '../../request/all.js'
import "./index.less";
import { Navigation, Pagination } from "swiper";
import third1 from '../../assets/third/01.jpeg'
import third2 from '../../assets/third/02.jpeg'
import third3 from '../../assets/third/03.jpeg'
import third4 from '../../assets/third/04.jpeg'
const thirdAll = [
  {
    "index": 31,
    "img": third1,
    "title": "快办一体机终端项目",
    "text": "该项目采用Android原生 + H5 移动混合开发技术，技术选型合理，可扩展性强。项目成果在行政案件快速办理（领域）进行了应用，有效简化了行政案件的办理流程，提高了办案人员工作效率，帮助客户创造经济效益近200万。    ",
    "button1": "横向课题",
    "button2": "App开发"
  },
  {
    "index": 32,
    "img": third2,
    "title": "快办一体机终端项目",
    "text": "该项目采用Android原生 + H5 移动混合开发技术，技术选型合理，可扩展性强。项目成果在行政案件快速办理（领域）进行了应用，有效简化了行政案件的办理流程，提高了办案人员工作效率，帮助客户创造经济效益近200万。    ",
    "button1": "横向课题",
    "button2": "App开发"
  },
  {
    "index": 33,
    "img": third3,
    "title": "快办一体机终端项目",
    "text": "该项目采用Android原生 + H5 移动混合开发技术，技术选型合理，可扩展性强。项目成果在行政案件快速办理（领域）进行了应用，有效简化了行政案件的办理流程，提高了办案人员工作效率，帮助客户创造经济效益近200万。    ",
    "button1": "横向课题",
    "button2": "App开发"
  },
  {
    "index": 34,
    "img": third4,
    "title": "快办一体机终端项目",
    "text": "该项目采用Android原生 + H5 移动混合开发技术，技术选型合理，可扩展性强。项目成果在行政案件快速办理（领域）进行了应用，有效简化了行政案件的办理流程，提高了办案人员工作效率，帮助客户创造经济效益近200万。    ",
    "button1": "横向课题",
    "button2": "App开发"
  }
]

export default function App(props: any) {
  const [imgList, setImgList] = useState<Array<Object>>([])
  useEffect(() => {
    indexThird().then((res: any) => {
      setImgList(thirdAll)
    })
  }, [])
  let loading = () => imgList.length == 0 ? true : false
  return (
    <div className="thirdContent">
      <div className="thirdIn"
      >
        <div className='header'
          style={{
            transform: props.pageNumber == 2 ? "none" : "translateX(-200px)",
            opacity: props.pageNumber == 2 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}>
          <p className='header1'>项目作品</p>
          <p className='header2'>Project works</p>
        </div>
        <Skeleton paragraph={{ rows: 20 }} style={{ width: '90%', margin: '0 auto' }} loading={loading()} active round>
          <Swiper
            spaceBetween={30}
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
            className='thirdSwiper1'
          >
            {
              imgList.map((item: any) => (
                <SwiperSlide
                  style={{
                    opacity: props.pageNumber == 2 ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                  }}>
                  <Row align="top">
                    <Col className="gutter-row" lg={{ span: 13 }} xs={{ span: 24 }}>
                      <img className="img" src={item.img} />
                    </Col>
                    <Col lg={{ span: 1 }}></Col>
                    <Col className="contentAll" lg={{ span: 9 }} xs={{ span: 24 }}>
                      <p className="title">{item.title}</p>
                      <p className="content">{item.text}</p>
                      <div className="buttonList">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Button className='button' style={{ width: '100%' }}>{item.button2}</Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Button className='button' style={{ width: '100%' }}>{item.button1}</Button>
                        </motion.div>
                      </div>

                    </Col>
                    <Col lg={{ span: 1 }}></Col>
                  </Row>
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

  );
}
