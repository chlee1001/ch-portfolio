import React from 'react'
import styled, { css } from 'styled-components'
import ProjectItem from '#components/projects/project-item'
import SubTitle from '#components/commons/SubTitle'
import myData from '#assets/db.json'
import { maxDevices } from '#styles/theme/variables'

const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  flex-direction: column;
  margin-bottom: 5rem;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;

  @media ${maxDevices.mobileL} {
    ${css`
      margin-bottom: 2rem;
    `}
  }
  @media ${maxDevices.mobileXS} {
    ${css`
      padding: 0;
    `}
  }
`

const Projects = () => {
  const { projects } = myData

  if (projects.length === 0) {
    return null
  }

  return (
    <>
      <SubTitle>Projects</SubTitle>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ProjectsContainer>
    </>
  )
}

export default Projects
