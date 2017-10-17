import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    null,
    ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Rick and Morty', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'House Hunters', color: 'LimeGreen' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'Lime' })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
