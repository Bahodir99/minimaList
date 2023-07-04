import React from 'react';
import footer__img from '../../../../assets/img/manage/manage-info-bgi.png';
import header__img from '../../../../assets/img/manage/manage-info.png';

import './Hero.scss'


function Hero() {
  return (
    <div>
        
        <div className="container hero__inner">
                <div className="box-img">
                    <img className='footer__img' src={footer__img} alt="" />
                    <img className='header__img' src={header__img} alt="" />
                </div>
        </div>

    </div>
  )
}

export default Hero