import React, { useEffect } from 'react'
import Swiper from 'swiper';

import "swiper/css/swiper.css"
import './myswiper.css'

export const MySwiper = (imgs) => {
  const myimgs = imgs.imgs
  useEffect(() => {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      pagination: {
        el: '.swiper-pagination',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }, [])
  return (
    <div style={{ position: 'relative' }}>
      {
        // 当轮播图数量大于2则变为轮播 否则静态图片
        myimgs.length < 2 ?
          (
            <img src={require(`../../assets/imgs/banner/${myimgs[0]}`)} alt={myimgs[0]} />
          ) : (
            <div>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {
                    myimgs.map(img =>
                      (<div className="swiper-slide" key={img}><img src={require(`../../assets/imgs/banner/${img}`)} alt={img} /></div>)
                    )
                  }
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          )
      }
    </div>
  )
}
