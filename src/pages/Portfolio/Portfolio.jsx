import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Manage from '../../components/Portfolio-components/Manage/Manage'
import Bookmark from '../../components/Portfolio-components/Bookmark/Bookmark'
import Insure from '../../components/Portfolio-components/Insure/Insure'
import Flyo from '../../components/Portfolio-components/Flyo/Flyo'
import Project from '../../components/Project/Project'

function Portfolio() {
  return (
    <div>
      <Header/>

      <Manage/>
      
      <Bookmark/>

      <Insure/>

      <Flyo/>

      <Project/>

      <Footer/>
    </div>
  )
}

export default Portfolio