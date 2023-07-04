import React from 'react';
import { Link } from 'react-router-dom';
import './Project.scss'


function Project() {
    return (
        <div>
            <section className='project'>
                <div className="container">

                    <ul className='project__list'>
                        <li className='project__item line'>
                            <h3>Interested in doing <br /> a project together?</h3>
                        </li>
                        <li className='project__item'>
                            <Link to={'/contact'}>CONTACT ME</Link>
                        </li>
                    </ul>

                </div>
            </section>
        </div>
    )
}

export default Project