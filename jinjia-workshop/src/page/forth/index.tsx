import { useState, useEffect } from 'react'
import './index.less'
import { motion } from "framer-motion";
import { Card, Button, Skeleton } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';
import forth1 from '../../assets/forth/01.jpg'
import forth2 from '../../assets/forth/02.jpg'
import forth3 from '../../assets/forth/03.jpg'
import forth4 from '../../assets/forth/04.jpg'
import forth5 from '../../assets/forth/05.jpg'
import forth6 from '../../assets/forth/06.jpg'
import forth7 from '../../assets/forth/07.jpg'
import fbk from '../../assets/forth/fbk.jpg'
import wlg from '../../assets/forth/wlg.jpg'
import pjl from '../../assets/forth/pjl.jpg'
import qln from '../../assets/forth/qln.jpg'
import cys from '../../assets/forth/cys.jpg'
import qjb from '../../assets/forth/qjb.jpg'
import pjy from '../../assets/forth/pjy.jpg'
import zjn from '../../assets/forth/zjn.jpg'

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
      "description": "全国职业院校技能大赛三等奖获得者，多次参加天津市技能竞赛获得金银铜奖数次。"
    },
    {
      "index": 46,
      "img": forth6,
      "name": "刘景鸿",
      "description": "2022第六届一带一路暨金砖国家技能发展与技术创新大赛全国一等奖，天津市职业院校技能大赛一等奖、校企协同育人项目优秀学员"
    },
    {
      "index": 47,
      "img": forth7,
      "name": "张煜成",
      "description": "天津市五一劳动奖章获得者。多年企业一线软件开发经验，专业方向：移动应用开发。指导学生多次获得国家级竞赛奖项。"
    },
    {
      "index": 48,
      "img": fbk,
      "name": "房博坤",
      "description": "天津市人民政府奖学金，专业方向：热爱app，小程序开发，对后端开发有一定了解"
    },
    {
      "index": 49,
      "img": wlg,
      "name": "王李广",
      "description": "全国大学生自强之星、全国大学生数学建模竞赛天津赛区二等奖、天津市高校资助宣传大使提名奖获得者。喜欢演讲和钻研技术，专业方向：前端、移动端。 "
    },
    {
      "index": 50,
      "img": pjl,
      "name": "庞金玲",
      "description": "互联网➕双创比赛项目银奖，市优秀青年志愿者"
    },
    {
      "index": 51,
      "img": qln,
      "name": "乔丽娜",
      "description": "性格性格沉稳，独立性强。"
    },
    {
      "index": 51,
      "img": cys,
      "name": "曹元顺",
      "description": "海河工匠杯第三届移动应用开发银奖，节跳动青训营第四届移动应用开发基础班大项目获得第二名。"
    },
    {
      "index": 51,
      "img": qjb,
      "name": "綦建泊",
      "description": "执行力强，好学，对移动应用开发有着深厚兴趣"
    },
    {
      "index": 51,
      "img": zjn,
      "name": "张佳宁",
      "description": "学习能力强，热爱学习，对web前端有着强烈兴趣。"
    },
    {
      "index": 51,
      "img": pjy,
      "name": "裴佳雨",
      "description": "曾获学校一等奖学金。执行力强，对前端开发有着浓厚兴趣。"
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
