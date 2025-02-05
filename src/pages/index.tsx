import { HeadFC } from 'gatsby';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';

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

const SubTitle = styled.div`
  font-size: ${(props) => props.theme.fontSize.h2};
  text-align: left;
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

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSize.h2};
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color.primary};
  border-bottom: 2px solid ${(props) => props.theme.color.primary};
  padding-bottom: 0.5rem;
`;

const Card = styled.div`
  padding: 2rem;

  p {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.color.text.dark};
  }

  p:first-child {
    font-weight: bold;
    color: ${(props) => props.theme.color.primary};
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

  return (
    <Wrapper>
      <MainSection>
        <MainTitle>{renderMainAnimation()}</MainTitle>

        <SubTitle>
          <Highlight>I am Rupa.</Highlight>
        </SubTitle>
      </MainSection>
      <ContentSection>
        <Card>
          <Title>안녕하세요.</Title>
          <p>편하게 루파라고 불러주시면 좋겠습니다. 아니면 다빈이라고 불러주시면 됩니다.</p>
          <p>
            주로 React와 Typescript로 개발하고 있습니다. 가장 좋아하는 건 styled-components 였는데, 현재는 tailwind
            사용이 즐겁습니다.
          </p>
          <p>
            프론트엔드 개발자로 일하고 있지만 꼭 프론트엔드만 하지는 않습니다. 만드려는 서비스가 있다면 어떤 영역이든
            개발합니다.
          </p>
        </Card>

        <Card>
          <Title>현재</Title>
          <p>
            게임 팀에선 게임을 만드려고 기획 중입니다. 이전에 개발하던 Savor22B 프로젝트를 마무리하고, 재미에 집중해서
            기획해보려고 합니다.
          </p>
          <p>
            사용하고 싶은 앱을 1인 개발하고 있습니다. 간단한 앱이라고 생각해서 시작했는데 생각보다 원하는 모습으로
            만드는 것이 어렵습니다. 혼자서 백엔드부터 프론트엔드까지 하려니까 시간이 배로 걸리는 것 같습니다. 그렇지만
            원하는 서비스가 내 손에서 완성되는 모습을 보는게 너무 즐겁습니다. 얼른 더 많은 사용자가 생겨서 유용한
            서비스가 되고 싶습니다.
          </p>
        </Card>

        <Card>
          <Title>좋아하는 것</Title>
          <p>새로운 프로그래밍 경험을 좋아합니다. 서비스 만드는게 즐겁습니다.</p>
          <p>개발 해보면서 느낀건 1인 개발보다 팀으로 개발하는게 훨씬 즐겁다고 느껴집니다.</p>
          <p>커뮤니케이션 하고, 코드리뷰 하고, 그런 과정들에서 새로운 관점이 보이는 것이 즐겁습니다.</p>
          <p>오픈 소스가 좋습니다. 개발하는 모든 것들을 오픈소스화 할 수 있으면 전부 오픈하려고 합니다. </p>
          <p>뭔가 배우고, 나누는 게 정말 즐겁습니다. 스터디 같은것도 좋아하고 책을 함께 읽는 것도 좋아합니다. </p>
        </Card>

        <Card>
          <Title>개발 가치관</Title>

          <p>1순위는 유지보수가 쉬운 코드를 짜는 것이라고 생각합니다.</p>
          <p>그리고 리팩토링 하는 습관을 들여야 한다고 생각합니다. 가능하다면 작게, 여러번, 자주하려고 합니다.</p>
        </Card>

        <Card>
          <Title>취미</Title>
          <p>소설보기, 만화 보기, 애니메이션 보기, 영화 보기, 게임 입니다.</p>
          <p>용의자 X의 헌신, 너만이 없는 거리, 슈타인즈 게이트, 셔터 아일랜드, 아이작을 좋아합니다.</p>
        </Card>
      </ContentSection>
    </Wrapper>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Rupa</title>;
