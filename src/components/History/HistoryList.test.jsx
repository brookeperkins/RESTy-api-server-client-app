import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from './HistoryList';
/* eslint-disable max-len */

describe('HistoryList component', () => {
  afterEach(() => cleanup());

  const testArray = [
    { url: 'https://hey-arnold-api.herokuapp.com/api/v1/characters/random', 
      method: 'GET' },
    { url: 'https://hey-arnold-api.herokuapp.com/api/v1/characters/random',
      method: 'POST' },
    { url: 'https://hey-arnold-api.herokuapp.com/api/v1/characters/random',
      method: 'GET' }
  ];

  it('render HistoryList component', () => {
    const { asFragment } = render(<HistoryList
      histories={testArray}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
