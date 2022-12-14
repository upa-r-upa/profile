import { HeadFC } from 'gatsby';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import ResumeList, { Resume, ResumeProject } from 'assets/data/resume';
import { FillButton } from 'components/Button/styled';
import { getPeriodFormatDate } from 'utils/date';

const Wrapper = styled.div`
  color: ${(props) => props.theme.color.text.light};
  min-width: 70rem;
`;

const MainSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 30rem;
`;

const ContentSection = styled.div`
  max-width: 95rem;
  margin: 1rem auto;
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.color.primary};
  font-weight: 500;
`;

const Bold = styled.span`
  font-weight: 500;
`;

const ContentTitle = styled(Bold)`
  display: block;
  margin-bottom: 1.5rem;
  font-family: ${(props) => props.theme.fontFamily.special};
`;

const CursorAnimation = keyframes`
  0%, 45%, 90%, 100% {
    opacity: 1;
  }

  50%, 85% {
    opacity: 0;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const Button = styled(FillButton)`
  svg {
    display: inline-block;
    margin-right: 1rem;
    font-size: ${(props) => props.theme.fontSize.sub};
  }

  background-color: #fff;
  font-family: ${(props) => props.theme.fontFamily.special};
`;

const GithubButton = styled(Button).attrs({ buttonColor: 'light' })`
  background-color: #323437;
  margin-right: 1rem;
`;

const Link = styled.a`
  display: block;
`;

const SubTitle = styled.div`
  font-size: ${(props) => props.theme.fontSize.h3};
  text-align: left;
  font-family: ${(props) => props.theme.fontFamily.special};
`;

const Section = styled.div`
  color: ${(props) => props.theme.color.text.light};
  width: 100%;
  margin-bottom: 2rem;
  padding-left: 2rem;
`;

const Title = styled.div`
  color: ${(props) => props.theme.color.primary};
  margin-left: 2rem;
  font-size: ${(props) => props.theme.fontSize.h1};
  font-family: ${(props) => props.theme.fontFamily.special};
  border-bottom: 0.3rem dotted ${(props) => props.theme.color.primary};

  &:before {
    content: '>';
    padding-right: 1rem;
  }
`;

const Content = styled.div`
  padding: 2rem;
  font-size: ${(props) => props.theme.fontSize.content};
  letter-spacing: 0.1rem;
`;

const ContentList = styled.ul``;

const Item = styled.li`
  margin-bottom: 2rem;
  line-height: 2.2;
`;

const Team = styled.div`
  margin-top: 5rem;
`;

const TeamTitle = styled(ContentTitle)`
  font-size: ${(props) => props.theme.fontSize.h3};

  ${Highlight} {
    color: ${(props) => props.theme.color.secondary};
    font-size: ${(props) => props.theme.fontSize.h2};
  }

  &:first-child {
    margin-top: 0rem;
  }
`;

const ProjectSpec = styled.p`
  margin-bottom: 0.5rem;
  font-family: ${(props) => props.theme.fontFamily.special};
`;

const ResumeItem = styled.li`
  margin-bottom: 0.2rem;
  font-size: ${(props) => props.theme.fontSize.sub};
  letter-spacing: 0.15rem;

  &:before {
    content: '>_';
    padding-right: 1.5rem;
    font-size: ${(props) => props.theme.fontSize.h4};
    font-family: ${(props) => props.theme.fontFamily.special};
    letter-spacing: -0.8rem;
  }
`;

const ResumeWrapper = styled.ul`
  width: max-content;
  padding-left: 0;
`;

const Project = styled.div`
  margin-bottom: 5rem;

  &:nth-child(odd) {
    ${ProjectSpec}, ${ResumeItem}::before {
      color: ${(props) => props.theme.color.secondary};
    }
  }

  &:nth-child(even) {
    ${ProjectSpec}, ${ResumeItem}::before {
      color: ${(props) => props.theme.color.primary};
    }
  }

  &:last-child {
    margin-bottom: 0rem;
  }
`;

const ProjectTitle = styled.p`
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: ${(props) => props.theme.fontSize.title};
`;

const Darken = styled.span`
  color: ${(props) => props.theme.color.text.dark};
`;

const ProjectDescription = styled.p`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color.text.dark};
  letter-spacing: 0.2rem;
  letter-spacing: 0.1rem;
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.content};
  font-family: ${(props) => props.theme.fontFamily.special};

  ${Link} {
    border-bottom: 0.1rem solid transparent;

    &:hover {
      border-bottom: 0.1rem solid ${(props) => props.theme.color.primary};
    }
  }
`;

const InfoLabel = styled.p`
  margin-right: 1rem;

  &:after {
    content: ':';
  }
`;

const MainTitle = styled.div`
  text-align: left;
  font-family: ${(props) => props.theme.fontFamily.special};
  font-weight: 500;
  margin: 2rem 0;
  line-height: 1;
  color: ${(props) => props.theme.color.text.light};
  font-size: 7rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '>';
    position: absolute;
    left: -5rem;
    top: 0;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: -3rem;
    width: 1.5rem;
    height: 100%;
    top: 0rem;
    background-color: #ffffff60;

    animation: ${CursorAnimation} 1s infinite;
  }
`;

const FlickerAnimation = keyframes`
  0% {
    width: 0px;
  }

  100% {
    width: max-content;
  }
`;

const TextPart = styled.span<{ delaySecond: number }>`
  display: inline-block;
  overflow: hidden;
  width: 0px;
  animation: ${FlickerAnimation} 0.1s forwards;
  animation-delay: ${(props) => props.delaySecond}s;

  &:nth-child(n + 8) {
    color: ${(props) => props.theme.color.secondary};
  }
`;

const typingAnimationText = 'HELLO, World!';
const partAnimation = 0.3;

const typingAnimationTextArray = Array.from(typingAnimationText);

const IndexPage = () => {
  const renderMainAnimation = (): React.ReactNode => {
    return typingAnimationTextArray.map((part, i) => (
      <TextPart key={i} delaySecond={partAnimation * i}>
        {part}
      </TextPart>
    ));
  };

  const getFormattedLibraries = (libraries: Array<string>): string => {
    return libraries.join(', ');
  };

  const renderProjects = (projects: Array<ResumeProject>): React.ReactNode => {
    return projects.map(({ title, period, description, libraries, tasks }) => (
      <Project key={title}>
        <ProjectTitle>
          {title} <Darken>{`[${getPeriodFormatDate(...period)}]`}</Darken>
        </ProjectTitle>
        <ProjectSpec>{getFormattedLibraries(libraries)}</ProjectSpec>
        <ProjectDescription>{description}</ProjectDescription>

        <ResumeWrapper>
          {tasks.map((task) => (
            <ResumeItem key={task}>{task}</ResumeItem>
          ))}
        </ResumeWrapper>
      </Project>
    ));
  };

  const renderResumeList = (resumeList: Array<Resume>): React.ReactNode => {
    return resumeList.map((team) => (
      <Team key={team.team}>
        <TeamTitle>
          <Highlight>@{team.team}</Highlight> ({`${getPeriodFormatDate(...team.period)}`})
        </TeamTitle>

        {renderProjects(team.projects)}
      </Team>
    ));
  };

  return (
    <Wrapper>
      <MainSection>
        <MainTitle>{renderMainAnimation()}</MainTitle>

        <SubTitle>
          I am developer <Highlight>Dabin Kim.</Highlight>
        </SubTitle>
      </MainSection>

      <ContentSection>
        <Section>
          <Title>ME?</Title>
          <Content>
            <ContentTitle>
              I&#39; m Kim Da-bin, a front-end developer with<Highlight> four years</Highlight> of experience.
            </ContentTitle>

            <ContentList>
              <Item>
                ?????? React??? Typescript??? ????????????, styled-components??? ???????????????.
                <br /> ????????? ?????? ????????? ???????????????, ??????????????? ???????????? <Highlight>?????????</Highlight>??? ????????????.
                ?????????, ?????? ????????? <Highlight>??????</Highlight>??? ?????? ????????????. ???????????? ???????????? ?????? ????????? ?????????!
                <br />
              </Item>

              <Item>
                ????????? ??????????????? ????????????, ???????????? ????????? ?????? ??????, ???????????? ???????????? ???????????????. <br />
                ????????? ??????????????? ????????? ?????????, ????????? ?????????????????? ???????????? ????????????.
              </Item>
            </ContentList>

            <ButtonsWrapper>
              <Link href={'https://github.com/upa-r-upa'}>
                <GithubButton>Github</GithubButton>
              </Link>

              <Link href={'https://kimdabin.tistory.com'}>
                <Button>Tistory blog</Button>
              </Link>
            </ButtonsWrapper>
          </Content>
        </Section>

        <Section>
          <Title>Resume!</Title>
          <Content>{renderResumeList(ResumeList)}</Content>
        </Section>

        <Section>
          <Title>More?</Title>

          <Content>
            <Information>
              <InfoLabel>Email</InfoLabel>
              <Highlight>
                <Link href="mailto:me@upa-r-upa.com">me@upa-r-upa.com</Link>
              </Highlight>
            </Information>

            <Information>
              <InfoLabel>Info</InfoLabel>
              This page is currently under development. Thank you.
            </Information>
          </Content>
        </Section>
      </ContentSection>
    </Wrapper>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Develop with Uparupa</title>;
