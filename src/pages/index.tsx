import { HeadFC } from 'gatsby';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import ResumeList, { Resume, ResumeProject } from 'assets/data/resume';
import { FillButton } from 'components/Button/styled';
import { getPeriodFormatDate } from 'utils/date';

const Wrapper = styled.div`
  color: ${(props) => props.theme.color.text.light};
  width: 100%;
  padding: 0 2rem;
`;

const MainSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${({ theme }) => theme.mediaQuery.tabletAndPC} {
    height: 30rem;
  }

  ${({ theme }) => theme.mediaQuery.mobile} {
    height: 50vh;
  }
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
  font-size: ${(props) => props.theme.fontSize.h2};
  text-align: left;
  font-family: ${(props) => props.theme.fontFamily.special};
`;

const Section = styled.div`
  color: ${(props) => props.theme.color.text.light};
  width: 100%;
  margin-bottom: 2rem;
  padding-left: 2rem;

  ${({ theme }) => theme.mediaQuery.mobile} {
    margin-right: auto;
    margin-left: auto;
    padding-left: 0;
  }
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

  ${({ theme }) => theme.mediaQuery.mobile} {
    margin-left: 0;
  }
`;

const Content = styled.div`
  padding: 2rem;
  font-size: ${(props) => props.theme.fontSize.content};
  letter-spacing: 0.1rem;

  ${({ theme }) => theme.mediaQuery.mobile} {
    padding: 2rem 0;
  }
`;

const ContentList = styled.ul``;

const Item = styled.li`
  margin-bottom: 2rem;

  ${({ theme }) => theme.mediaQuery.tabletAndPC} {
    line-height: 2.2;
  }

  ${({ theme }) => theme.mediaQuery.mobile} {
    line-height: 1.7;
  }
`;

const Team = styled.div`
  margin-top: 5rem;

  ${({ theme }) => theme.mediaQuery.mobile} {
    margin-top: 1rem;
  }
`;

const TeamTitle = styled(ContentTitle)`
  font-size: ${(props) => props.theme.fontSize.h2};

  ${Highlight} {
    color: ${(props) => props.theme.color.secondary};
  }

  &:first-child {
    margin-top: 0rem;
  }
`;

const ProjectSpec = styled.p`
  margin-bottom: 0.5rem;
  font-family: ${(props) => props.theme.fontFamily.special};
  font-size: ${(props) => props.theme.fontSize.sub};
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

const ResumeWrapper = styled.ul``;

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
  font-family: ${(props) => props.theme.fontFamily.special};
  font-weight: 500;
  margin: 2rem 0;
  line-height: 1;
  color: ${(props) => props.theme.color.text.light};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '>';
    margin-right: 1rem;
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

    ${({ theme }) => theme.mediaQuery.mobile} {
      right: -2rem;
      width: 1rem;
    }
  }

  ${({ theme }) => theme.mediaQuery.PC} {
    font-size: 7rem;
  }

  ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 6rem;
  }

  ${({ theme }) => theme.mediaQuery.mobile} {
    font-size: 5rem;
  }

  @media (max-width: 53.5rem) {
    font-size: 2.7rem;
    flex-wrap: wrap;
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
                주로 React와 Typescript를 사용하고, styled-components를 사랑합니다.
                <br /> 새로운 것을 무작정 도입해보고, 공부해보는 과정에서 <Highlight>즐거움</Highlight>을 느낍니다.
                그리고, 개발 영역에 <Highlight>제한</Highlight>을 두지 않습니다. 재미있어 보인다면 일단 해보고 봅니다!
                <br />
              </Item>

              <Item>
                귀여운 우파루파를 사랑하고, 아이작과 슬라임 랜처 게임, 슈타인즈 게이트를 좋아합니다. <br />
                최근엔 오픈소스에 흥미가 생겨서, 조금씩 컨트리뷰션을 진행하고 있습니다.
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
