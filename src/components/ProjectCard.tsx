import { useState, useEffect } from 'react'
import './ProjectCard.css'
import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = Array.isArray(project.image) ? project.image : [project.image]
  const hasMultipleImages = images.length > 1

  useEffect(() => {
    if (hasMultipleImages) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 3000) // Change every 3 seconds

      return () => clearInterval(interval)
    }
  }, [hasMultipleImages, images.length])

  return (
    <div className="project-card">
      <div className="project-image">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.title} - ${index + 1}`}
            className={`project-img ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
        <div className="project-overlay">
          <a 
            href={project.link} 
            className="view-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </a>
        </div>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => {
            const isFollowerTag = tag.includes('Followers')
            return (
              <span 
                key={tag} 
                className="tag"
                style={isFollowerTag ? { background: '#dc2626', fontWeight: '600' } : {}}
              >
                {tag}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
