import React from 'react';
import styled from 'styled-components';

const SearchBlock = styled.form`
  padding-bottom: 3em;

  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    font-size: 1.5em;
    margin-right: 1em;
    font-weight: bold;
  }
`;

const SearchInput = styled.input`
  display: flex;

  width: 7em;

  font-size: 1.5em;
  border: 0.05em solid #ccc;

  :focus {
    border: #ccc;
    outline-color: #ccc;
  }
`;

const SearchButton = styled.button`
  margin-left: 1.5em;

  display: flex;

  font-family: InkFree;
  font-weight: bold;

  border: 0.1em solid black;
  background: none;

  :hover {
    background: black;
    color: white;
  }
`;

const Search = () => {
  return (
    <SearchBlock>
      <a>Name</a>
      <SearchInput name="name" />
      <SearchButton>Search</SearchButton>
    </SearchBlock>
  );
};

export default Search;
