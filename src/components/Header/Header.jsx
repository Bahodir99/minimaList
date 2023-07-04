import React from 'react';
import Hlogo from '../../assets/img/dark-logo.svg';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <div>
        
        <header>
            <div className="container">
                <nav className='header__nav'>
                   <Link to={'/'} className='header__logo'>
                        <img src={Hlogo} alt="logo" />
                   </Link>

                    <ul className='header__list'>
                        <li className='header__item'>
                            <Link className='header__link' to={'/'}>HOME</Link>
                        </li>
                        <li className='header__item'>
                            <Link className='header__link' to={'/portfolio'}>PORTFOLIO</Link>
                        </li>
                        <li className='header__item'>
                            <Link className='header__link' to={'/contact'}>CONTACT ME</Link>
                        </li>
                    </ul>

                </nav>
            </div>
        </header>

    </div>
  )
}

export default Header