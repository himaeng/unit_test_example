import React from 'react';
import renderer from 'react-test-renderer';

import RepoPage from '../../src/pages/RepoPage';

describe('RepoPage', () => {
  it('RepoPage สามารถ render ได้อย่างถูกต้อง', () => {
    const component = renderer.create(
      <RepoPage />
    );

    expect(component).toMatchSnapshot();
  });
});
