import React from 'react'
import './about.css'
import ME from '../../assets/photos1.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="My photos" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresh Graduate</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Mentoring</h5>
              <small>Fullstack web developer</small> 
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>2 completed </small>
            </article>
          </div>

          <p>
          Saya adalah seorang junior fullstack web developer. Saya belajar mengenai teknologi MERN selama 5 bulan dan Programming Fundamental 1 bulan di Eduwork.id. Saya memiliki 1 project website ecommerce dengan menerapkan React JS untuk frontend, redux untuk state management, Node JS dan Express JS untuk backend serta MongoDB sebagai database.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About