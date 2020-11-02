import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryItem from './HistoryItem';
/* eslint-disable max-len */

describe('HistoryItem component', () => {
  afterEach(() => cleanup());
  it('renders the HistoryItem component', () => {
    const { asFragment } = render(
      <HistoryItem
        url="https://hey-arnold-api.herokuapp.com/api/v1/characters/5da237699734fdcb7bef8f51"
        method="GET"
        body="Here is the body"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
