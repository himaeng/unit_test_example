import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import RepoList from '../components/RepoList';
import { fetchData } from '../actions';

const host = 'https://api.github.com';
const repositories =
  `${host}/search/repositories?q=react-native&sort=stars&order=desc`;

class RepoPage extends Component {
  render() {
    return (
      <View>
        <Text>
          Loading..
        </Text>
      </View>
    );
  }
}

export default RepoPage;
