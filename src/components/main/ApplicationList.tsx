import React from 'react';
import styled from 'styled-components';
import { ALL_APPLICATION, Application } from '../../lib/graphql/query/applications';
import { useQuery } from 'react-apollo';
import '../../css/font/font.css';
import { Link } from 'react-router-dom';

const ApplicationBlock = styled.table`
  border-collapse: collapse;

  text-align: center;

  td {
    padding: 0.5em 1em;
    border-top: 0.15em solid black;
    border-right: 0.15em solid black;
    font-weight: bold;
    font-size: 1.2em;
  }

  td:last-child {
    border-right: none;
  }

  .menu {
    border-right: 0.15em solid white;
    color: white;
    background: black;
  }
  .menu:last-child {
    border-right: none;
  }

  .phone {
    width: 7em;
  }

  a:link {
    color: black;
    text-decoration: none;
  }
  a:visited {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: black;
    text-decoration: none;
    border-bottom: 0.05em solid black;
  }

  a {
    cursor: pointer;
  }
`;

const ApplicationList = () => {
  const { loading, error, data } = useQuery(ALL_APPLICATION);

  if (loading) return <h1>Loading. . .</h1>;
  if (error) return <div>Something happened</div>;

  return (
    <ApplicationBlock>
      <tr>
        <td className="menu pk">#</td>
        <td className="menu field">Field</td>
        <td className="menu class">class</td>
        <td className="menu number">number</td>
        <td className="menu name">name</td>
        <td className="menu phone">phone</td>
        <td className="menu status">isSubmit</td>
      </tr>
      {data.applications.map((application: Application) => (
        <tr>
          <td className="pk">{application.pk}</td>
          <td className="field">{application.field}</td>
          <td className="class">{application.classNum}</td>
          <td className="number">{application.studentNum}</td>
          <td className="name">
            <Link to={`/${application.pk}`}>{application.name}</Link>
          </td>
          <td className="phone">{application.phone}</td>
          <td className="status">{application.isSubmit ? 'Submitted' : 'Not yet'}</td>
        </tr>
      ))}
    </ApplicationBlock>
  );
};

export default ApplicationList;
