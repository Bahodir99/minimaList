import React from 'react'
import './Flyo.scss'


function Flyo() {
    return (
        <div>
            <section className='flyo'>
                <div className="container">
                    <ul  className="flyo__list">
                        <li  className="flyo__item">
                            <div className="flyo__inner">
                                <h2 className="flyo__title">Fylo</h2>
                                <p  className="flyo__text">This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS <br /> like Flexbox and Grid for layout purposes.</p>
                                <button className="flyo__btn">VIEW PROJECT</button>
                            </div>
                        </li>
                        <li className="flyo__item">

                        </li>
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default Flyo