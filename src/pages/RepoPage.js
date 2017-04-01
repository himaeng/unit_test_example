import React, { Component,  } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import RepoList from '../components/RepoList';
import { fetchData, selectRepo } from '../actions';

const host = 'https://api.github.com';
const repositories =
  `${host}/search/repositories?q=react-native&sort=stars&order=desc`;

export class RepoPage extends Component {
  static propTypes = {
    fetchData: React.PropTypes.func.isRequired,
    repos: React.PropTypes.object.isRequired,
    selectRepo: React.PropTypes.func,
    selected: React.PropTypes.bool
  }

  componentDidMount() {
    this.props.fetchData(repositories);
  }

  renderMainPart() {
    const { isLoading, repos, selected } = this.props.repos;
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
        selected={selected}
        selectRepo={this.props.selectRepo}
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
  { fetchData, selectRepo }
)(RepoPage);
