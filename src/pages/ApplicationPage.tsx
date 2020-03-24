import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { GET_APPLICATION } from '../lib/graphql/query/applications';
import '../css/font/font.css';

const ApplicationPageBlock = styled.div`
  box-sizing: border-box;
  padding: 1em 20em;

  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  h1 {
    margin: 0.5em 0;
    padding: 0;
    font-size: 1.5em;
  }

  h2 {
    margin: 0;
    font-size: 2em;
    font-family: none;
    font-weight: light;
  }
`;

const ApplicationBlock = styled.div`
  width: 100%;
  height: 40em;
  border: 0.1em solid black;
  border-radius: 16px;

  padding: 3em 3em;

  box-sizing: border-box;

  font-family: none;

  word-break: break-all;
`;

interface Props {
  match: {
    params: {
      pk: number;
    };
  };
}

const ApplicationPage: FunctionComponent<Props> = ({
  match: {
    params: { pk }
  }
}) => {
  const { loading, error, data } = useQuery(GET_APPLICATION, {
    variables: {
      pk: Number(pk)
    }
  });

  if (loading) return <h1>Loading. . .</h1>;
  if (error) {
    console.log(error);
    return <h1>Something happened</h1>;
  }

  return (
    <ApplicationPageBlock>
      <h1>{data.application.field}</h1>
      <h2>{data.application.name}</h2>
      <h1>{data.application.phone}</h1>
      <ApplicationBlock>{data.application.content}</ApplicationBlock>
    </ApplicationPageBlock>
  );
};

export default ApplicationPage;
