import React from 'react'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Stack from './component/stack/Stack'
import Project from './component/project/Project'
import Footer from './component/footer/Footer'
import Contact from './component/contact/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Stack />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App