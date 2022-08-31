import { HeadFC } from 'gatsby';
import * as React from 'react';

const NotFoundPage = () => {
  return <div>Not found</div>;
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
