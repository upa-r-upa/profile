import { HeadFC } from 'gatsby';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';

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
          <Title>좋아하는 것은..</Title>
          <p>우파루파, 슈타인즈 게이트, 셔터 아일랜드</p>
          <p>게임은 공포 게임과 1인칭 시뮬레이터 게임을 좋아합니다.</p>
        </Card>

        <Card>
          <Title>개발에서는..</Title>
          <p>오픈 소스가 좋습니다.</p>
          <p>새로운 프로그래밍 경험을 좋아합니다. 서비스 만드는게 즐거워요.</p>
          <p>개발 해보면서 느낀건 1인 개발보다 팀으로 개발하는게 훨씬 즐거운 것 같아요.</p>
          <p>커뮤니케이션 하고, 코드리뷰 하고, 그런 과정들이 행복합니다.</p>
        </Card>

        <Card>
          <Title>지금은..</Title>
          <p>푹 쉬고 있습니다.</p>
          <p>게임 백엔드 개발을 하고 있습니다.</p>
          <p>사용하고 싶은 앱을 1인 개발하고 있습니다.</p>
        </Card>

        <Card>
          <Title>팀 활동은..</Title>
          <p>NBB에서 활동하고 있습니다. 재밌는 게임을 만들고 싶은데 어려워요.</p>
          <p>팀 이름 뜻은 Not blond beard인데.. 이름 자동 생성기를 돌렸더니 저렇게 됐습니다.</p>
          <p>금발 수염이 아니라는게 무슨 뜻이 있는지는 잘 모르겠습니다...</p>
          <p>그렇지만 이제 익숙해져서 정감 가고 좋아요.</p>
        </Card>

        <Card>
          <Title>취미는..</Title>
          <p>소설보기, 만화 보기, 애니메이션 보기, 영화 보기, 게임 입니다.</p>
          <p>가끔 가다가 자기계발서 보는것도 좋아합니다.</p>
          <p>요 근래는 미움 받을 용기를 읽고 있어요. 내용이 참 좋아요.</p>
          <p>애니메이션으로는 최근은 명탐정 코난 정주행 중입니다. 매 편마다 사람이 죽는건 참 잔인한 일입니다..</p>
        </Card>

        <Card>
          <Title>가치관은..</Title>
          <p>All is well.</p>
          <p>항상 즐겁게 살고 싶습니다.</p>
          <p>나름 즐겁고 행복한 것 같아요.</p>
        </Card>
      </ContentSection>
    </Wrapper>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Develop with Uparupa</title>;
