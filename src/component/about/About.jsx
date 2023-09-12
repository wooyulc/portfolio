import React from 'react'
import './about.css'
import ME from '../../asset/images/me.png'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">

        <p>As a fullstack developer, my goal is to utilize my skills and expertise in both front-end and back-end development to contribute to the growth and success of a dynamic organization. With a passion for building robust and scalable applications, I am eager to work with a talented team to design, develop, and implement innovative solutions that meet business needs and exceed customer expectations.</p>

<a href="#contact" className='btn btn-primary'>Let's Talk</a>
</div>
      </div>
    </section>
  )
}

export default About