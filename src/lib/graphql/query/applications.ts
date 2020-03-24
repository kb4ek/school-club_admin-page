import gql from 'graphql-tag';

export type Application = {
  pk: number;
  phone: string;
  classNum: number;
  studentNum: number;
  name: string;
  field: string;
  content: string;
  isSubmit: boolean;
};

export const ALL_APPLICATION = gql`
  query {
    applications {
      pk
      phone
      classNum
      studentNum
      name
      field
      content
      isSubmit
    }
  }
`;

export const GET_APPLICATION = gql`
  query getApplication($pk: Int!) {
    application(pk: $pk) {
      phone
      classNum
      studentNum
      name
      field
      content
    }
  }
`;
