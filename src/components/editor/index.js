import React from 'react';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import '../../../node_modules/graphiql/graphiql.css';
import './theme.css';

function graphQLFetcher(graphQLParams) {
  return fetch('https://api.halvorson.co.uk', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

const Wrapper = styled.div`
  .graphiql-container {
    min-height: 550px;
    text-align: left;
    margin-top: 40px;
  }
`;

export default function() {
  return (
    <Wrapper>
      <GraphiQL editorTheme="mnml dark" fetcher={graphQLFetcher} />
    </Wrapper>
  );
}
