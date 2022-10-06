import { HeadFC } from 'gatsby';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { FillButton } from 'components/Button/styled';

const Wrapper = styled.div`
  color: #ffffff;
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
  color: #d74e5c;
  font-weight: 500;
`;

const Bold = styled.span`
  font-weight: 500;
`;

const ContentTitle = styled(Bold)`
  display: block;
  margin-bottom: 1.5rem;
  font-family: 'Silkscreen';
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
    font-size: 1.4rem;
  }

  background-color: #fff;
  font-family: 'Silkscreen';
`;

const GithubButton = styled(Button).attrs({ buttonColor: 'light' })`
  background-color: #323437;
  margin-right: 1rem;
`;

const Link = styled.a`
  display: block;
`;

const MainTitle = styled.div`
  text-align: left;
  font-family: 'Silkscreen';
  font-weight: 500;
  margin: 2rem 0;
  line-height: 1;
  color: #ffffff;
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
    color: #ffee00;
  }
`;

const SubTitle = styled.div`
  font-size: 2.5rem;
  text-align: left;
  font-family: 'Silkscreen';
`;

const Section = styled.div`
  color: #fff;
  width: 100%;
  margin-bottom: 2rem;
  padding-left: 2rem;
`;

const Title = styled.div`
  color: #d74e5c;
  margin-left: 2rem;
  font-size: 4rem;
  font-family: 'Silkscreen';
  border-bottom: 0.3rem dotted #d74e5c;

  &:before {
    content: '>';
    padding-right: 1rem;
  }
`;

const Content = styled.div`
  padding: 2rem;
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
`;

const ContentList = styled.ul``;

const Item = styled.li`
  margin-bottom: 2rem;
  line-height: 2.2;
`;

const TeamTitle = styled(ContentTitle)`
  font-size: 2.5rem;
  margin-top: 5rem;

  ${Highlight} {
    color: #ffee00;
    font-size: 3rem;
  }

  &:first-child {
    margin-top: 0rem;
  }
`;

const ProjectSpec = styled.p`
  margin-bottom: 0.5rem;
  font-family: 'Silkscreen';
`;

const ResumeItem = styled.li`
  margin-bottom: 0.2rem;
  font-size: 1.4rem;
  letter-spacing: 0.15rem;

  &:before {
    content: '>_';
    padding-right: 1.5rem;
    font-size: 2rem;
    font-family: 'Silkscreen';
    letter-spacing: -0.8rem;
  }
`;

const Resume = styled.ul`
  width: max-content;
  padding-left: 0;
`;

const Project = styled.div`
  margin-bottom: 5rem;

  &:nth-child(odd) {
    ${ProjectSpec}, ${ResumeItem}::before {
      color: #d1c300;
    }
  }

  &:nth-child(even) {
    ${ProjectSpec}, ${ResumeItem}::before {
      color: #d74e5c;
    }
  }

  &:last-child {
    margin-bottom: 0rem;
  }
`;

const ProjectTitle = styled.p`
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 1.9rem;
`;

const Darken = styled.span`
  color: #bebebe;
`;

const ProjectDescription = styled.p`
  margin-bottom: 1rem;
  color: #bebebe;
  letter-spacing: 0.2rem;
  letter-spacing: 0.1rem;
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-family: 'Silkscreen';

  ${Link} {
    border-bottom: 0.1rem solid transparent;

    &:hover {
      border-bottom: 0.1rem solid #d74e5c;
    }
  }
`;

const InfoLabel = styled.p`
  margin-right: 1rem;

  &:after {
    content: ':';
  }
`;

const TYPING_ANIMATION_TEXT = 'HELLO, World!';
const PART_ANIMATION_SECOND = 0.3;

const IndexPage = () => {
  return (
    <Wrapper>
      <MainSection>
        <MainTitle>
          {[...TYPING_ANIMATION_TEXT].map((part, i) => (
            <TextPart key={part} delaySecond={PART_ANIMATION_SECOND * i}>
              {part}
            </TextPart>
          ))}
        </MainTitle>
        <SubTitle>
          I am developer <Highlight>Dabin Kim.</Highlight>
        </SubTitle>
      </MainSection>

      <ContentSection>
        <Section>
          <Title>ME?</Title>
          <Content>
            <ContentTitle>
              {`I' m`} Kim Da-bin, a front-end developer with<Highlight> four years</Highlight> of experience.
            </ContentTitle>

            <ContentList>
              <Item>
                주로 React와 Typescript를 사용하고, styled-components를 사랑합니다.
                <br /> 새로운 것을 무작정 도입해보고, 공부해보는 과정에서 <Highlight>즐거움</Highlight>을 느낍니다.
                그리고, 개발 영역에 <Highlight>제한</Highlight>을 두지 않습니다. 재미있어 보인다면 일단 해보고 봅니다!
                <br />
              </Item>

              <Item></Item>

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
          <Content>
            <TeamTitle>
              <Highlight>@Famoz</Highlight> (2019.02. ~ 2022.06.)
            </TeamTitle>

            <Project>
              <ProjectTitle>
                DL 건설 e편한세상 리뉴얼 웹 개발 <Darken>[2022.01. ~ 2022.06.]</Darken>
              </ProjectTitle>
              <ProjectSpec>React, Typescript, Mobx, gsap, styled-components</ProjectSpec>
              <ProjectDescription>e편한세상 웹 페이지의 리뉴얼 개발 프로젝트</ProjectDescription>

              <Resume>
                <ResumeItem>웹 성능 최적화로 속도 약 10% 향상 (Google lighthouse 기준)</ResumeItem>
                <ResumeItem>퍼블리싱 진행 된 프로젝트의 API 연동 및 기능 개발 위주 진행</ResumeItem>
                <ResumeItem>반복되는 작업의 스크립트 작성을 통한 자동화</ResumeItem>
                <ResumeItem>
                  폴더 구조 수정 및 이름, 참조 수정 등의 자동화 스크립트 작성 (작업 기간 50% 단축)
                </ResumeItem>
                <ResumeItem>200개 이상의 파일 특정 내용 작성 자동화 스크립트 작성</ResumeItem>
              </Resume>
            </Project>

            <Project>
              <ProjectTitle>
                서버리스 솔루션 서비스 웹 2차 개발 (MVP) <Darken>[2021.07. ~ 2022.06.]</Darken>{' '}
              </ProjectTitle>
              <ProjectSpec>React, Typescript, Electron, Mobx, Fabric.js, Antd</ProjectSpec>
              <ProjectDescription>자사 신규 서버리스 솔루션 서비스 MVP 웹 개발 프로젝트 (2차)</ProjectDescription>

              <Resume>
                <ResumeItem>사용자의 수정이 잦은 계층 구조(트리 데이터) 데이터 조회/수정 기능 제작</ResumeItem>
                <ResumeItem>API 기반의 Fabric.js Canvas UI 관리 기능 제작</ResumeItem>
              </Resume>
            </Project>

            <Project>
              <ProjectTitle>
                Koelnmesse wayfinding 서비스 웹 추가 기능 개발 <Darken>[2021.03. ~ 2021.08.]</Darken>{' '}
              </ProjectTitle>
              <ProjectSpec>React, Typescript, Redux-observable, RxJS, React-Konva</ProjectSpec>
              <ProjectDescription>독일 Koelnmesse 국제 무역 박람회 길 안내 서비스 웹</ProjectDescription>

              <Resume>
                <ResumeItem>반응형 웹을 위한 폴더 구조 설계 및 템플릿 제작으로 개발 생산성 향상</ResumeItem>
                <ResumeItem>
                  기존 6할 이상 제작되었던 반응형 웹의 개발 구조를 점진적으로 개선하여 10할까지 구현
                </ResumeItem>
                <ResumeItem>기개발된 프로젝트의 PWA 작업과 버그 수정 및 일부 기능 추가 개발</ResumeItem>
                <ResumeItem>Lazy import 기능을 통한 code splitting 및 이미지 캐싱 등을 통한 최적화</ResumeItem>
              </Resume>
            </Project>

            <Project>
              <ProjectTitle>
                서버리스 솔루션 서비스 웹 1차 개발 <Darken>[2021.01. ~ 2021.10.]</Darken>
              </ProjectTitle>
              <ProjectSpec>React, Typescript, Redux-observable, RxJS, styled-components </ProjectSpec>
              <ProjectDescription>자사 신규 서버리스 솔루션 서비스 웹</ProjectDescription>

              <Resume>
                <ResumeItem>
                  Git convention/branch 관리 전략 성립 및 Issue/PR template을 활용한 소스 관리 도입
                </ResumeItem>
                <ResumeItem>Github Action을 통한 CI 제작으로 개발 생산성 향상</ResumeItem>
                <ResumeItem>재사용 가능한 공통 UI 컴포넌트(Popover, Select, Modal 등) 구현</ResumeItem>
                <ResumeItem>트리 데이터의 관리(수정/추가/삭제) 및 재귀 방식을 통한 렌더링 구현</ResumeItem>
              </Resume>
            </Project>

            <TeamTitle>
              <Highlight>@Wier</Highlight> (2019.06. ~ 2021. 10.)
            </TeamTitle>

            <Project>
              <ProjectTitle>
                게임 데이터 분석 커뮤니티 <Darken>[2020.08. ~ 2021.10.]</Darken>
              </ProjectTitle>
              <ProjectSpec>React, Next.js, Typescript, Redux-thunk, styled-components</ProjectSpec>
              <ProjectDescription>채팅 기능, 게시판 등을 갖춘 게임 데이터 분석 커뮤니티 웹</ProjectDescription>

              <Resume>
                <ResumeItem>Next.js를 사용한 SSR 페이지 제작으로 SEO 진행</ResumeItem>
                <ResumeItem>
                  게임 통계 페이지, 마이페이지 등의 전반적인 프론트 구현 및 반응형 작업 (채팅 제외)
                </ResumeItem>
                <ResumeItem>런칭 이후 피드백을 통한 점진적인 웹 개선</ResumeItem>
              </Resume>
            </Project>

            <Project>
              <ProjectTitle>
                브랜드 매장 관리 애플리케이션 <Darken>[2019.06. ~ 2019.08.] </Darken>
              </ProjectTitle>
              <ProjectSpec>Ionic, Angular, Canvas, SCSS </ProjectSpec>
              <ProjectDescription>상품 결제와 매장 제품 관리를 도와주는 AI 시스템 Hybrid App</ProjectDescription>

              <Resume>
                <ResumeItem>기개발된 Ionic app의 기능 추가 작업 진행</ResumeItem>
                <ResumeItem>Canvas를 활용한 사진 속 특정 좌표의 컨텐츠 표기 기능 개발</ResumeItem>
                <ResumeItem>매장 내 상품의 결제 안내 페이지 및 상세 페이지 구현</ResumeItem>
              </Resume>
            </Project>
          </Content>
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
