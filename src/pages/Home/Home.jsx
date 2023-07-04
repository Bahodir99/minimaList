import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Me__info from '../../components/Home-components/Me-info/Me__info'
import About from '../../components/Home-components/About/About'
import Project from '../../components/Project/Project'


function Home() {
  return (
    <div>
      <Header />;

      <Me__info/>

      <About/>

      <Project/>


      <Footer />;
    </div>
  )
}

export default Home