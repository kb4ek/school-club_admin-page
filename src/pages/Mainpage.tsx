import React from 'react';
import styled from 'styled-components';
import Search from '../components/main/Search';
import ApplicationList from '../components/main/ApplicationList';

const MainpageBlock = styled.div`
  box-sizing: border-box;
  padding: 5em 30em;

  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Mainpage = () => {
  return (
    <MainpageBlock>
      <Search />
      <ApplicationList />
    </MainpageBlock>
  );
};
export default Mainpage;
