import React from 'react';
import person from '../../../assets/img/about-img.png';
import './About.scss';



function About() {
  return (
    <div>
        <section id='about'>
            <div className="container">
                <div className="about__me">
                    <img className='about__img' src={person} alt="" />
                    <div className="text">
                        <h4 className='about__title'>About Me</h4>
                        <p className='about__text'>I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
                        <button className='about__btn'>GO TO PORTFOLIO</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About