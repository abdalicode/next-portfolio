import styled from "@emotion/styled";
import SectionHeader from "components/SectionHeader/SectionHeader";
import React, {
  MouseEvent,
  MouseEventHandler,
  useState,
  ReactNode,
} from "react";
import { sectionWork as data } from "data/data";
import { keyframes } from "@emotion/react";
const Container = styled.section`
  max-width: 700px;
  margin: 0px auto;
  padding: 100px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 100vw;
  }
`;
const ContentContainer = styled.div<{ children: ReactNode | ReactNode[] }>`
  min-height: 350px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100vw;
    overflow: scroll;
  }
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  @media (max-width: 768px) {
    width: 80vw;
    margin: 0;
    max-width: 100vw;
    overflow: scroll;
    flex-direction: row;
    margin-bottom: 20px;
  }
`;
type TabProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
};
const Tab = styled.button<TabProps>`
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: var(--transition);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0px 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  &:hover {
    color: var(--green);
    outline: 0px;
    background-color: var(--light-navy);
  }
  ${(props) =>
    props.isActive &&
    `
      color: var(--green);
    outline: 0px;
    background-color: var(--light-navy);
  `}
`;
const contentFrames = keyframes`
    from{
        opacity: 0;
        transform: translateY(-10%);
    }to{
        opacity:1;
        transform: translateY(0); 
    }
`;
const Content = styled.div`
  width: "100%";
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 25px;
  animation: ${contentFrames} 0.4s ease-out;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Title = styled.h3``;
const Company = styled.a``;

const Date = styled.p`
  font-family: var(--font-mono);
`;
const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
`;
const ContentItem = styled.li`
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  font-size: var(--fz-sm);
  &:not(:first-child) {
    margin-top: 20px;
  }
  &::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: var(--green);
  }
`;

const SectionWork = () => {
  const [activeTab, setActiveTab] = useState<string>(data.tabs[0].tabName);
  const [content, setContent] = useState<any>(data.tabs[0].content);
  const getContent = (tabName: string) => {
    const index = data.tabs.findIndex((data) => data.tabName === tabName);
    return data.tabs[index].content;
  };
  const handleClickTab = (event: MouseEvent<HTMLButtonElement>) => {
    const tabName: string = event.currentTarget.innerText;
    const content = getContent(tabName);
    setContent(content);
    setActiveTab(tabName);
  };
  if (!data.show) return null;
  return (
    <Container id={data.id}>
      <SectionHeader number={2}>Where I&rsquo;ve Worked</SectionHeader>
      <ContentContainer>
        <Tabs>
          {data.tabs.map((tab) => {
            return (
              <Tab
                key={tab.content.date}
                onClick={handleClickTab}
                isActive={activeTab === tab.tabName}
              >
                {tab.tabName}
              </Tab>
            );
          })}
        </Tabs>

        <Content className="content-view">
          <Title>
            {content.title}{" "}
            <Company
              href={content.company.link}
              target="_blank"
              className="link"
            >
              @{content.company.name}
            </Company>
          </Title>
          <Date>{content.date}</Date>
          <ContentList>
            {content.contentList.map((item: string) => {
              return <ContentItem key={item}>{item}</ContentItem>;
            })}
          </ContentList>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default SectionWork;
