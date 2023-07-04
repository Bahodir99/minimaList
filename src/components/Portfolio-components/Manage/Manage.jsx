import React from 'react';
import './Manage.scss';
import { useNavigate } from 'react-router-dom';



function Manage() {
    const navigate = useNavigate()

    let newPage = ()=>{
        navigate('/manage')
    }
    return (
        <div>
            <section className='manage'>
                <div className="container">
                    <ul className="manage__list">

                        <li className='manage__item'>

                        </li>
                        <li className='manage__item'>
                            <h3 className='manage__title'>Manage</h3>

                            <p className='manage__text'>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>

                            <button onClick={newPage} className='manage__btn'>VIEW PROJECT</button>
                        </li>

                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Manage