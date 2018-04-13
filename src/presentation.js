import React from 'react';
import {
  BlockQuote as SBlockQuote,
  Cite as SCite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote as SQuote,
  Slide,
  Text,
  ComponentPlayground,
  CodePane,
  BaseProps,
  Fill,
  Image
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import Editor from './components/editor';
import styled from 'styled-components';

require('normalize.css');

const images =  {
  live: require('./images/do-it-live.gif'),
};

preloader(images);

const theme = createTheme(
  {
    primary: '#181920',
    secondary: '#292633',
    tertiary: '#3D394A',
    quartenary: '#23212B',
    text: '#FFFFFF',
  },
  {
    primary: 'Cerebri Sans, -apple-system, BlinkMacSystemFont, Open Sans, Helvetica Neue, sans-serif',
    secondary: 'Source Code Pro',
  }
);

const Quote = styled(SQuote)`
  line-height: 1.4 !important;
`;

const BlockQuote = styled(SBlockQuote)`
  border-left: 7px solid #3D394A;
`;

const Cite = styled(SCite)`
  margin-left: 40px;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'fade']}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="text">
            Dafuq is GraphQL?
          </Heading>
          <Text margin="50px 0 0" textColor="text" textFont="secondary" textSize="35px">
            so 🔥 right now
          </Text>
        </Slide>
        <Slide bgColor="primary" textColor="text">
          <Heading size={6}>🤓</Heading>
          <Heading size={6} textColor="text" >
            Technically speaking
          </Heading>

          <BlockQuote textColor="text" margin="50px">
            <Quote textColor="text" textSize="30px">
              GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.
            </Quote>
            <Cite textColor="text">graphql.org</Cite>
          </BlockQuote>

        </Slide>

        <Slide bgColor="primary" textColor="text">
          <Heading size={6}>😏</Heading>
          <Heading size={6}  textColor="text">
          What actually is it?
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="text">
          <Heading size={6}  textColor="text">
           The benefits
          </Heading>
          <List>
            <ListItem>Well structured, auto-documenting API</ListItem>
            <ListItem>Performant</ListItem>
            <ListItem>Tooling, community</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="text">
          <Heading size={6}  textColor="text">
           How does it work?
          </Heading>
          <List>
            <ListItem>Send empty JSON</ListItem>
            <ListItem>Performant</ListItem>
            <ListItem>Tooling, community</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="text">
          <Heading size={6}  textColor="text">
           Schemas & SDL
          </Heading>

          {/*<CodePane
            lang="graphql"
            source={require('./snippets/schema.js')}
            margin="20px auto"
            overflow="overflow"
          />*/}
        </Slide>

        <Slide>
          <Heading textColor="white">#RESTisdead</Heading>
          <Text textColor="tertiary" margin="30px">let's not be overly dramatic here</Text>
        </Slide>

        <Slide textColor="text">
          <Heading size={6} textColor="text">Let's talk about REST</Heading>
          <List>
            <ListItem>An endpoint per route 😕</ListItem>
            <ListItem>Something</ListItem>
            <ListItem>Brings back lots, and lots and data, unless we clean the API</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

        <Slide textColor="text">
          <Heading size={6} textColor="text">As we already know...</Heading>
          <List>
            <ListItem>GraphQL has a single endpoint</ListItem>
            <ListItem>Something</ListItem>
            <ListItem>Brings back only the data we need</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} textColor="text" notes="It's presentation time">
          <Image src="https://media.giphy.com/media/A34x7CEKUkCyc/giphy.gif" width="750px" />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="text" notes="We're using a customised version of GraphIQL - show the docs to show the power of the schema">
          <Editor />
        </Slide>


        <Slide>
          <Heading textColor="text" size={6}>Routing</Heading>
          <Text>The client decides</Text>
        </Slide>

        <Slide textColor="text">
          <Heading>Authentication?</Heading>
          <Text>Nothing changes here, we still use the standard decouploed authentication methods, such as using JWTs to identify uers.</Text>
        </Slide>

        <Slide>
          <Heading>Security concerns</Heading>
          <Text>Luckily for us, the community is 💯</Text>

        </Slide>
      </Deck>
    );
  }
}
