import React, { useEffect, useState } from "react";
import { sectionAboutMe as data } from "data/data";
import styled from "@emotion/styled";
// import Image from "next/image";
import SectionHeader from "components/SectionHeader/SectionHeader";
import { motion, useAnimation } from "framer-motion";
import { useIntersect } from "lib/hooks/use-intersect";

const Image = styled.img``;

const Container = styled.section`
  max-width: 900px;
  margin: 0px auto;
  padding: 100px 0px;

  @media (max-width: 768px) {
    max-width: 100vw;
    padding: 25px 0px;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  overflow: hidden;
  @media (max-width: 768px) {
    display: block;
  }
`;
const LeftContent = styled(motion.div)``;
const LeftText = styled.div``;
const LeftList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
`;
const LeftItem = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  &::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: var(--green);
    font-size: var(--fz-sm);
    line-height: 12px;
  }
`;

const RightContent = styled(motion.div)`
  position: relative;
  max-width: 90vh;
  width: 100%;
  height: 100%;
  padding: 30px 0;
  padding-right: 20px;

  @media (max-width: 768px) {
    margin: 50px auto 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const RightWrapper = styled.div`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  display: block;
  position: relative;
  width: 210px;
  height: 210px;
  border-radius: var(--border-radius);
  background-color: var(--green);
  & img {
    position: relative;
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: var(--transition);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::before {
    top: 0px;
    left: 0px;
    background-color: var(--navy);
    mix-blend-mode: screen;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    transition: var(--transition);
    border: 2px solid var(--green);
    top: 20px;
    left: 20px;
    z-index: -1;
  }
  &:hover {
    /* background: transparent; */
    outline: 0px;
    box-shadow: 0 20px 30px -15px var(--navy-shadow);
    &::after {
      top: 15px;
      left: 15px;
    }
    & img {
      filter: none;
      mix-blend-mode: normal;
    }
  }
`;

const descVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const picVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function SectionAboutMe() {
  const [ref, inView] = useIntersect<HTMLDivElement>(0.45);
  const descControl = useAnimation();
  const picControl = useAnimation();

  useEffect(() => {
    if (inView) {
      descControl.start("visible");
      picControl.start("visible");
    }
  }, [inView, descControl, picControl]);
  return (
    <Container id={data.id} ref={ref}>
      <SectionHeader>{data.title}</SectionHeader>
      <ContentContainer>
        <LeftContent
          initial="hidden"
          variants={descVariants}
          animate={descControl}
          transition={{ duration: 0.9, damping: 20 }}
        >
          <LeftText dangerouslySetInnerHTML={{ __html: data.desc }}></LeftText>
          <LeftList>
            {data.list.map((item: string) => {
              return <LeftItem key={item}>{item}</LeftItem>;
            })}
          </LeftList>
        </LeftContent>
        <RightContent
          initial="hidden"
          variants={picVariants}
          animate={picControl}
        >
          <RightWrapper>
            <Image src={data.picture} alt="" />
          </RightWrapper>
        </RightContent>
      </ContentContainer>
    </Container>
  );
}

export default SectionAboutMe;
