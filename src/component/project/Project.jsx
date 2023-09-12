import React from 'react'
import "./project.css"
import IMG1 from '../../asset/images/Ecommerce.jpeg'
import IMG2 from '../../asset/images/personal-blog.jpeg'
import IMG3 from '../../asset/images/check_AI.jpeg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'E-commerce',
    github: 'http://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Blog-API',
    github: 'http://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Checker AI',
    github: 'http://github.com',
    demo: 'https://dribbble.com'
  },
]

const Project = () => {
  return (
    <section id='project'>
      <h5>Projects</h5>
      <h2>Portfolio</h2>

      <div className="containter project__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article id={id} className='project__item'>
              <div className='project__item-image'>   
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='blank' >Live Demo</a>
              </div>
              </article>
              )
            })
        }
      </div>
    </section>
  )
}

export default Project