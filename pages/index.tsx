import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Navbar from "components/Navbar/Navbar";
import styled from "@emotion/styled";
import SectionOne from "components/SectionOne/SectionOne";
import Badges from "components/Badges/Badges";
import SectionAboutMe from "components/SectionAboutMe/SectionAboutMe";
import SectionWork from "components/SectionWork/SectionWork";
import SectionProjects from "components/SectionProjects/SectionProjects";
import SectionMoreProjects from "components/SectionMoreProjects/SectionMoreProjects";
import SectionContact from "components/SectionContact/SectionContact";
import SectionActivity from "components/SectionActivity/SectionActivity";
import { sectionOne } from "data";
const Container = styled.div`
  padding: 0 50px;
  position: relative;
  @media (max-width: 967px) {
    padding: 0;
  }
`;

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px 150px;
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 425px) {
    padding: 0 20px;
  }
`;

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>{sectionOne.name}</title>
      </Head>
      <Container>
        <Navbar />
        <Badges />
        <SectionsContainer>
          <SectionOne />
          <SectionAboutMe />
          <SectionWork />
          <SectionProjects />
          <SectionMoreProjects />
          <SectionActivity />
          <SectionContact />
        </SectionsContainer>
      </Container>
    </React.Fragment>
  );
};

export default Home;
