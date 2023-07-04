import React from 'react';
import { Link } from 'react-router-dom';
import Flogo from '../../assets/img/white-logo.svg';
import './Footer.scss';
import GitHub from '../../assets/img/GitHub-icon.png';
import Twitter from '../../assets/img/Twitt-icon.png';
import Linked from '../../assets/img/Link-icon.png';



function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <nav className='footer__nav'>
                        <ul className='footer__pages'>
                            <li className='pages__item'>
                                <Link to={'/'}>
                                    <img src={Flogo} alt="logo" />
                                </Link>
                            </li>
                            <li className='pages__item'>
                                <Link to={'/'}>HOME</Link>
                            </li>
                            <li className='pages__item'>
                                <Link to={'/portfolio'}>PORTFOLIO</Link>
                            </li>
                            <li className='pages__item'>
                                <Link to={'/contact'}>CONTACT ME</Link>
                            </li>
                        </ul>

                        <ul className='social__list'>
                            <li className='social__item'>
                                <Link className='social__link' to={'https://github.com/'}>
                                    <img src={GitHub} alt="" />
                                </Link>
                            </li>
                            <li className='social__item'>
                                <Link className='social__link' to={'https://twitter.com/'}>
                                <img src={Twitter} alt="" />

                                </Link>
                            </li>
                            <li className='social__item'>
                                <Link className='social__link' to={'https://ru.linkedin.com/'}>
                                <img src={Linked} alt="" />

                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer