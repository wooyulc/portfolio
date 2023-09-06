import React from 'react'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Project from './component/project/Project'
import Footer from './component/footer/Footer'
import Experience from './component/exprience/Experience'
import Contact from './component/contact/Contact'
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App