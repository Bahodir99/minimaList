import React from 'react';
import './Me__info.scss'
import icon from '../../../assets/img/btn__icon.png';


function Me__info() {
  return (
    <div>
        <section className='info'>
            <div className="container info__inner">
                <div className="info-box">
                    <h4 className='info__text'>Hey, I’m Alex <br /> Spencer and I <br /> love building <br /> beautiful websites</h4><br />
                   
                   
                    <button type='submit' className='info__btn'>
                        <span className='info__span'>
                        <img src={icon} alt="" />
                        ABOUT ME
                        </span> 
                    </button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Me__info