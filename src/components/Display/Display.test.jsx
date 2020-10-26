/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from './Display';

describe('Display component', () => {
  afterEach(() => cleanup());

  const testDisplay = {
    'characters': [
      {
        '_id': '5da237699734fdcb7bef8f51',
        'name': 'Arnold Shortman',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
      },
      {
        '_id': '5da237699734fdcb7bef8f63',
        'name': 'Helga G. Pataki',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/e/e5/Helga_Pataki.png/revision/latest/scale-to-width-down/266?cb=20190816021807'
      }
    ]
  };

  it('renders Display', () => {
    const { asFragment } = render(<Display
      display={testDisplay}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
