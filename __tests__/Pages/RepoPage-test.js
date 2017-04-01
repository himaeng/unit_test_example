jest.mock('../../src/components/RepoList', () => 'Repolist');

import React from 'react';
import renderer from 'react-test-renderer';

import { RepoPage } from '../../src/pages/RepoPage';
import { repos } from '../../config/jest/mockData';

describe('RepoPage', () => {
  it('RepoPage สามารถ render ได้อย่างถูกต้อง', () => {
    const getComponent = (props) => {
      return (
        renderer.create(
          <RepoPage
            repos={props}
            fetchData={jest.fn()}
          />
        )
      )
    }

    let component = getComponent({ isLoading: true, repos: [] });

    expect(component).toMatchSnapshot();
  });
});
