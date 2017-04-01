import React, { Component, PropTypes } from 'react';
import {
  ListView,
  View,
  Text
} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

const RepoList = (props) => {
  const { repos } = props;
  const dataSource = ds.cloneWithRows(repos);

  return (
    <ListView
      dataSource={dataSource}
      renderRow={(repo) => (
        <View>
          <Text>{repo.name}</Text>
          <Text>{`${repo.stargazers_count} stars`}</Text>
        </View>
      )}
      contentContainerStyle={{ paddingVertical: 40 }}
    />
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired
}

export default RepoList;
