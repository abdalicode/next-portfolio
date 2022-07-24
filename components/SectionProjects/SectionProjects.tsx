import styled from "@emotion/styled";
import React, { useEffect } from "react";
import SectionHeader from "components/SectionHeader/SectionHeader";
import { sectionProjects as data } from "data/data";
import { FaGithub, FaLink } from "react-icons/fa";
// import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useIntersect } from "lib/hooks/use-intersect";

const Image = styled.img`
  aspect-ratio: 16 / 9;
`;

const Container = styled.section`
  max-width: 980px;
  margin: 0px auto;
  padding: 100px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 100vw;
    padding: 30px 0px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const ProjectImageContainer = styled.div`
  grid-column: 1 / 8;
  position: relative;
  transition: var(--transition);

  & img {
    /* object-fit: cover; */
    aspect-ratio: 16 / 9;
    height: auto;
    width: 100%;
  }
  @media (max-width: 1024px) {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.4;
  }
`;
const ProjectInfoContainer = styled.div`
  grid-column: 7 / -1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  right: 0;
  direction: rtl;
  @media (max-width: 1024px) {
    grid-column: 1 / -1;
  }
`;
const ProjectBadge = styled.span`
  margin: 10px 0px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  font-weight: 400;
`;
const ProjectTitle = styled.a`
  position: relative;
  z-index: 1;
  font-size: var(--fz-heading);
  margin-bottom: 15px;
  color: var(--slate);
`;
const ProjectCard = styled.div`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  color: var(--light-slate);
  font-size: var(--fz-md);
  text-align: left;
`;
const ProjectTags = styled.ul`
  display: flex;
  font-size: var(--fz-sm);
`;
const ProjectTag = styled.span`
  &:not(:first-of-type) {
    margin-right: 10px;
  }
`;
const ProjectLinks = styled.div`
  display: flex;
  font-size: var(--fz-xxl);
  & > *:not(:first-of-type) {
    margin-right: 20px;
  }
  & > *:hover {
    color: var(--green);
  }
`;
const Github = styled.a``;
const Link = styled.a``;
const Project = styled.div<{ direction: "ltr" | "rtl" }>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  position: relative;
  &:not(:first-of-type) {
    margin-top: 80px;
  }
  ${(props) =>
    props.direction === "rtl" &&
    `
      ${ProjectInfoContainer} {
          direction: ltr;
          grid-column: 1 / 7;
         }
      ${ProjectImageContainer}{
          grid-column: 6  / -1
         }
      ${ProjectLinks}{
        & > *:not(:first-of-type) {
        margin-left: 20px;
        }
    }
    
        ${ProjectTag}{
            &:not(:first-of-type) {
            margin-left: 10px;
        }
      }

  `}
  @media (max-width: 1024px) {
    border: 5px solid var(--green);
    padding: 20px;
    border-radius: 3px;
    overflow: hidden;

    &:not(:first-of-type) {
      margin-top: 100px;
    }
    ${ProjectInfoContainer} {
      display: flex;
      flex-direction: column;
      gap: 5px;
      position: relative;
      direction: ltr;
      width: 100%;
      height: 100%;
    }
    ${ProjectImageContainer} {
      width: 100%;
      filter: blur(2px) brightness(0.6);
    }
    display: flex;
    flex-direction: column;
    ${ProjectLinks} {
      & > *:not(:first-of-type) {
        margin-left: 20px;
      }
    }

    ${ProjectTag} {
      &:not(:first-of-type) {
        margin-left: 10px;
      }
    }
  }
  @media (max-width: 764px) {
    &:not(:first-of-type) {
      margin-top: 120px;
    }
  }
  @media (max-width: 600px) {
    &:not(:first-of-type) {
      margin-top: 60px;
    }
  }
  @media (max-width: 400px) {
    border: 2px solid var(--green);
    padding: 5px;
  }
`;

const SectionProjects = () => {
  return (
    <Container id={data.id}>
      <SectionHeader number={3}>{data.title}</SectionHeader>
      <ContentContainer>
        {data.projects.map((project) => {
          return (
            <Project key={project.title} direction={project.direction}>
              <ProjectImageContainer>
                <Image
                  src={project.image}
                  alt={project.title}
                  width="640px"
                  height="360px"
                />
              </ProjectImageContainer>
              <ProjectInfoContainer>
                <ProjectBadge>{project.badge}</ProjectBadge>
                <ProjectTitle
                  className="link"
                  href={project.link}
                  target="_blank"
                >
                  {project.title}
                </ProjectTitle>
                <ProjectCard>{project.description}</ProjectCard>
                <ProjectTags>
                  {project.tags.map((tag) => (
                    <ProjectTag key={tag}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  {project.github && (
                    <Github href={project.github} target="_blank">
                      <FaGithub />
                    </Github>
                  )}
                  {project.link && (
                    <Link href={project.link} target="_blank">
                      <FaLink />
                    </Link>
                  )}
                </ProjectLinks>
              </ProjectInfoContainer>
            </Project>
          );
        })}
      </ContentContainer>
    </Container>
  );
};

export default SectionProjects;
