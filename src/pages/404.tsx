import { HeadFC, Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

import { FillButton } from 'components/Button/styled';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div``;

const Highlight = styled.p`
  color: ${(props) => props.theme.color.text.light};
  font-family: ${(props) => props.theme.fontFamily.special};
  font-size: ${(props) => props.theme.fontSize.h1};
`;

const Button = styled(FillButton)`
  margin-top: 10rem;
  background-color: #fff;
  padding: 2rem;
  font-size: ${(props) => props.theme.fontSize.title};
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Inner>
        <Highlight>Not Found...?</Highlight>
        <Link to="/">
          <Button buttonColor="dark">Rupa를 구경하러 이동하기...</Button>
        </Link>
      </Inner>
    </Container>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>페이지가 없어요..</title>;
