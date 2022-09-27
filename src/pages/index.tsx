import type { HeadFC } from 'gatsby';
import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';

import uparupaGIF from 'assets/images/karameru.gif';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainWrapper = styled.div``;

const RootCircleContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
`;

const CircleContainer = styled.div`
  width: 25rem;
  height: 25rem;
  position: relative;
`;

const CircleAnimation = keyframes`
  0% {
    border-top-left-radius: 40%;
    border-top-right-radius: 70%;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 40%;
  }

  65% {
    border-top-left-radius: 60%;
    border-top-right-radius: 30%;
    border-bottom-top-radius: 50%;
    border-bottom-bottom-radius: 10%;
  }


  100% {
    border-bottom-left-radius: 40%;
    border-bottom-right-radius: 70%;
    border-top-left-radius: 30%;
    border-top-right-radius: 40%;
  }
`;

const Circle = css`
  width: 20rem;
  height: 20rem;
  position: absolute;
  opacity: 0.6;
  left: 0;
  top: 0;
  animation: ${CircleAnimation} 10s alternate infinite;
`;

const Layer1 = styled.div`
  ${Circle};
  transform: rotate(90deg) scale(1.1) translateY(2rem);
  background-color: #ffd6da;
  animation-duration: 6s;
`;
const Layer2 = styled.div`
  ${Circle};
  background-color: #fabec4;
  transform: rotate(60deg) translateY(6rem);
  animation-duration: 8s;
`;
const Layer3 = styled.div`
  ${Circle};
  background-color: #f8a1aa;
  transform: rotate(200deg) scale(0.9) translateY(-10rem);
  opacity: 0.7;
`;

const Profile = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
  text-align: left;
`;

const SubTitle = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
`;

const Highlight = styled.span`
  color: #d74e5c;
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 1.4rem;
`;

const InfoContainer = styled.div`
  margin-top: 3rem;
  position: relative;
  z-index: 2;
`;

const RefContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const InfoList = styled.ul`
  margin-top: 1.5rem;
  padding-left: 3rem;
  text-align: right;
`;

const Info = styled.li`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  position: relative;

  ::before {
    content: '>';
    display: inline-block;
    font-weight: bold;
    padding-right: 1rem;
    font-size: 2rem;
  }
`;

const Link = styled.a`
  display: block;
`;

const Button = styled.button`
  color: #00000099;
  font-weight: bold;
  padding: 1rem 1rem;
  border-radius: 3rem;
  transition: 0.2s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 0px 0px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

const YoutubeButton = styled(Button)`
  margin: 1rem;
  margin-right: 0rem;
  background-color: #fbcf1f;
`;

const GithubButton = styled(Button)`
  background-color: #161b22;
  color: white;
  margin-top: 1rem;
`;

const TistoryButton = styled(Button)`
  background-color: #ff5544;
  color: white;
  margin-top: 1rem;
`;

const Uparupa = styled.img`
  width: 5rem;
  position: absolute;
  top: 2.5rem;
`;

const KARAMERU_URL = 'https://www.youtube.com/channel/UCpGk56cJDZcVqIxZatX7nbQ';
const GITHUB_URL = 'https://github.com/upa-r-upa';
const TISTORY_URL = 'https://kimdabin.tistory.com';

const IndexPage = () => {
  return (
    <Wrapper>
      <MainWrapper>
        <TitleContainer>
          <RootCircleContainer>
            <CircleContainer>
              <Layer1 />
              <Layer2 />
              <Layer3 />
            </CircleContainer>
          </RootCircleContainer>

          <Profile>
            <SubTitle>
              안녕하세요.
              <br />
            </SubTitle>
            <Description>우파루파 캐릭터와 슈타인즈 게이트, 에도가와 코난을 좋아하는</Description>
            <Title>
              개발자 <Highlight>김다빈</Highlight>입니다!
            </Title>
          </Profile>
        </TitleContainer>

        <InfoContainer>
          <InfoList>
            <Info>
              요즘 가장 관심있는 건 <Highlight>오픈소스</Highlight> 활동이에요.
              <br /> 문서 번역부터 천천히 친해지는 중입니다.
            </Info>

            <Info>
              프론트가 주력이지만, 다른 개발 영역에서도 활동하고 있어요. <br />
              현재 속해있는 <Highlight>Blond Beard</Highlight>팀은 유니티 게임 팀이에요!
            </Info>

            <Info>
              <Uparupa src={uparupaGIF} alt="uparupa" />
              우파루파는 너무 귀여워서 좋아하는 캐릭터에요.
              <br /> 집에 피규어와 인형도 있어요.
              <Link href={KARAMERU_URL}>
                <YoutubeButton>Karameru 작가님 유튜브</YoutubeButton>
              </Link>
            </Info>

            <Info>
              최근엔 스탠리 패러블 디럭스의 거의 모든 엔딩을 봤어요. <br />
              그리고 아이작 리팬던스 어려움 모드로 드디어 엔딩을 봤어요!
            </Info>

            <Info>
              해당 사이트는 아직 PC/Tablet만 지원하고 있어요.
              <br /> 더 많은 정보와 개발 이야기들도 보러 오세요!
              <RefContainer>
                <Link href={GITHUB_URL}>
                  <GithubButton>Github 방문하기</GithubButton>
                </Link>

                <Link href={TISTORY_URL}>
                  <TistoryButton>Tistory 방문하기</TistoryButton>
                </Link>
              </RefContainer>
            </Info>
          </InfoList>
        </InfoContainer>
      </MainWrapper>
    </Wrapper>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Develop with Uparupa</title>;
