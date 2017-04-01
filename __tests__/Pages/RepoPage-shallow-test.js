import React from 'react';
import { shallow } from 'enzyme';
import { View, Text } from 'react-native';

import RepoPage from '../../src/pages/RepoPage';

describe('RepoPage shallow', () => {
  it('RepoPage สามารถ render ได้อย่างถูกต้อง โดยวิธี shallow', () => {
    const getComponent = () => {
      return <RepoPage />;
    };

    const expectedComponent = (dynamicPart) => {
      return (
        <View>
          {dynamicPart}
        </View>
      );
    };

    let receivedComponent = shallow(getComponent());
    expect(receivedComponent.contains(expectedComponent(
      <Text>
        Loading..
      </Text>
    )));
  });
});
