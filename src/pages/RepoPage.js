import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import RepoList from '../components/RepoList';
import { fetchData } from '../actions';

const host = 'https://api.github.com';
const repositories =
  `${host}/search/repositories?q=react-native&sort=stars&order=desc`;

class RepoPage extends Component {
  static propTypes = {
    fetchData: PropTypes.func.isRequired,
    repos: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.fetchData(repositories);
  }

  renderMainPart() {
    const { isLoading, repos } = this.props.repos;
    if(!repos || isLoading) {
      return (
        <Text style={styles.Loading}>
          Loading...
        </Text>
      );
    }

    return (
      <RepoList
        repos={repos}
      />
    );
  }

  render() {
    const { isLoading, repos } = this.props.repos;
    return (
      <View style={styles.container}>
        {this.renderMainPart()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 2,
    justifyContent: 'center'
  },
  loading: {
    fontSize: 20,
    alignSelf: 'center'
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.repos
  }
}

export default connect(
  mapStateToProps,
  { fetchData }
)(RepoPage);
