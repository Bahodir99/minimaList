import React from 'react';
import './Bookmark.scss';


function Bookmark() {
    return (
        <div>
            <section className='bookmark'>
                <div className="container">
                    <ul className='bookmark__list'>
                        <li className='bookmark__item'>
                            <div className="bookmark__inner">
                                <h2 className='bookmark__title'>Bookmark</h2>

                                <p className='bookmark__text'>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.</p>

                                <button className='bookmark__btn'>VIEW PROJECT</button>

                            </div>
                        </li>
                        <li className='bookmark__item'>

                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
};

export default Bookmark;