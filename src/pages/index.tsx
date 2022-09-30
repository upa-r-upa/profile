import type { HeadFC } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

import uparupaGIF from 'assets/images/karameru.gif';
import LayerCircleArt from 'components/Art/LayerCircleArt';
import { FillButton } from 'components/Button/styled';
import { GITHUB_URL, TISTORY_URL } from 'configs/constants';

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
  color: ${(props) => props.theme.color.primary};
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
  line-height: 1.5;
  margin-bottom: 1.5rem;
  position: relative;

  ::before {
    display: inline-block;
    font-weight: bold;
    padding-right: 1rem;
  }
`;

const Link = styled.a`
  display: block;
`;

const YoutubeButton = styled(FillButton)`
  margin: 1rem;
  margin-right: 0rem;
  background-color: #fbcf1f;
`;

const GithubButton = styled(FillButton).attrs({ buttonColor: 'light' })`
  background-color: #161b22;
  margin-top: 1rem;
`;

const TistoryButton = styled(FillButton).attrs({ buttonColor: 'light' })`
  background-color: #ff5544;
  margin-top: 1rem;
`;

const Uparupa = styled.img`
  width: 5rem;
  position: absolute;
  top: 2.5rem;
`;

const KARAMERU_URL = 'https://www.youtube.com/channel/UCpGk56cJDZcVqIxZatX7nbQ';

const IndexPage = () => {
  return (
    <Wrapper>
      <MainWrapper>
        <TitleContainer>
          <RootCircleContainer>
            <LayerCircleArt />
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
