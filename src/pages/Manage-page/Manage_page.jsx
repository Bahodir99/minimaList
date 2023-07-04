import React from 'react'
import './Manage_page.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Project from '../../components/Project/Project'
import Hero from './Manage-comp/Hero/Hero'
import Info from './Manage-comp/Info/Info'



function Manage_page() {


    return (
        <div className='div'>
            <Header />

            <Hero />

            <Info />

            <Project />

            <Footer />
        </div>
    )
}

export default Manage_page