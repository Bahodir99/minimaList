import React from 'react';
import './Info.scss';


function Info() {
    return (
        <div>
            <section>
                <div className="container">

                    <ul className='info__list'>
                        <li className=' list__item'>
                            <div className="info__left">

                                <h2 className='info__left--title'>Manage</h2>
                                <p className='info__left--text'>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>

                                <b className='info__sub'>Interaction Design / Front End Development</b>
                                <b className='info__sub'>HTML / CSS / JS</b>

                                <button className='info__left--btn'>VISIT WEBSITE</button>
                            </div>
                        </li>
                        <li className='info__right list__item'>
                            <div className="info__right--project">
                                <h2 className='info__right--title'>Project Background</h2>
                                <p className='info__right--text'>This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.</p>
                                <h2 className='static__title'>Static Previews</h2>
                            </div>


                        </li>
                    </ul>
                
                    <div className="img__box">
                                <ul className='img__box--list'>

                                    <li className='img__box--item'>
                                        <div className="img__box--first">

                                        </div>
                                    </li>
                                    <li className='img__box--item'>
                                        <div className="img__box--second">

                                        </div>
                                    </li>

                                </ul>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Info




