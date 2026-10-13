import { useEffect } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import type { Project } from '../types/project'

const projectsData: Project[] = [
  {
    id: 1,
    title: 'SvaNiti',
    description: 'Official website of SvaNiti',
    image: ['/svaniti1.png', '/svaniti2.png'],
    tags: ['Official', 'Website'],
    link: 'https://www.svaniti.in/'
  },
  {
    id: 2,
    title: 'Damru - Announcement Demo',
    description: 'Announcement demo website with time',
    image: '/damru.png',
    tags: ['Demo', 'Real-time'],
    link: 'https://damru26.vercel.app/'
  },
  {
    id: 3,
    title: 'Rohit Shah Fitness',
    description: 'Website for Fitness Influencer ROHIT SHAH',
    image: ['/Rohit_shah.png', '/rohit_shah2.png'],
    tags: ['Fitness', 'Influencer', '626K+ Followers'],
    link: 'https://rohit-shah-website.vercel.app/'
  },
  {
    id: 4,
    title: 'SvaBharat',
    description: 'Official website of SvaBharat',
    image: ['/svabharat1.png', '/svabharat2.png'],
    tags: ['Corporate', 'Official'],
    link: 'https://sva-bharat-psi.vercel.app/'
  },
  {
    id: 5,
    title: 'Poonam Astrologer',
    description: 'Sample Website For Poonam Astrologer',
    image: '/Poonam_chaudhary.png',
    tags: ['Astrology', 'Influencer', '155K+ Followers'],
    link: 'https://poonam-chaudhary-theta.vercel.app/'
  },
  {
    id: 6,
    title: 'Sellixa',
    description: 'Official website for Branding Partner SELLIXA',
    image: ['/sellixa.png', '/sellixa2.png'],
    tags: ['Branding', 'Marketing'],
    link: 'https://www.sellixahq.com/'
  },
  {
    id: 7,
    title: 'Ashish Chippa',
    description: 'Official website of Ashish Chippa',
    image: '/Ashish_chippa.png',
    tags: ['Influencer', 'Portfolio', '96.8K+ Followers'],
    link: 'https://ashish-dating-app.vercel.app/'
  },
  {
    id: 8,
    title: 'Quantica',
    description: 'Website of eSport fest',
    image: ['/Quantica.png', '/quantica2.png'],
    tags: ['eSports', 'Gaming', 'Event'],
    link: 'https://www.quantica.fun/'
  }
]

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const cards = document.querySelectorAll('.project-card')
    cards.forEach((card, index) => {
      (card as HTMLElement).style.transitionDelay = `${index * 0.1}s`
      observer.observe(card)
    })

    const title = document.querySelector('.section-title')
    if (title) observer.observe(title)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title fade-in">My Projects</h2>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
