import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './Projects.js'
import { ProjectCard } from '../ProjectCard/ProjectCard.jsx'
import { projects } from '../../data/constants'


export const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Proyectos</Title>
        <Desc>
          He realizado una serie de proyectos. Tanto en la parte Frontend como en el backend, usando tecnologías como NodeJS o ReactJS
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Frontend' ?
            <ToggleButton active value="Frontend" onClick={() => setToggle('Frontend')}>FRONTEND</ToggleButton>
            :
            <ToggleButton value="Frontend" onClick={() => setToggle('Frontend')}>FRONTEND</ToggleButton>
          }
          <Divider />
          {toggle === 'Backend' ?
            <ToggleButton active value="Backend" onClick={() => setToggle('Backend')}>BACKEND</ToggleButton>
            :
            <ToggleButton value="Backend" onClick={() => setToggle('Backend')}>BACKEND</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}
