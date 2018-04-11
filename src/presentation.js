import React from 'react';

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';
import { One } from './slides';

require('normalize.css');

const theme = createTheme(
  {
    primary: '#181920',
    secondary: '#292633',
    tertiary: '#3D394A',
    quartenary: '#23212B',
    text: '#FFFFFF',
  },
  {
    primary: '-apple-system',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="text">
            Dafuq is GraphQL?
          </Heading>
          <Text margin="50px 0 0" textColor="text" textSize="40px">
            GraphQL, it's so 🔥 right now
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="text">

          <Heading size={6} textColor="text" caps>
            Technically speaking
          </Heading>

          <BlockQuote textColor="text">
            <Quote textColor="text" textSize="30px" lineHeight="48px">
              GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.
            </Quote>
            <Cite textColor="text">graphql.org</Cite>
          </BlockQuote>

        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="text">
          <Heading size={6} caps>
            Cool. What actually is it?
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="text">
          <Heading size={6}>Still not convinced, Roy?</Heading>

        </Slide>
      </Deck>
    );
  }
}
