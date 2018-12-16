import React, { Component } from 'react';
import UserInput from '../components/UserInputComponent';
import './GitRepoFetcher.css';
import RepoList from '../components/RepoListComponent';
import RepoDetail from '../components/RepoDetailComponent';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class GitRepoFetcher extends Component {

  render() {
    let repoDetails = null;
    if(this.props.repoDetails != null)
    {
      repoDetails = <RepoDetail repoDetails = {this.props.repoDetails}/>
    }
    return (
      <div className="layout stripes">
        <UserInput noRepoForUserName={this.props.noRepoForUserName} onNameChange={this.props.onUserNameChange} 
        onGetReposClick={() => this.props.onClickGetRepos(this.props.userName)}/>
        <RepoList repoDataList = {this.props.repoDataList} selectedRepo={this.props.selectedRepo}
        onChangeRepo = {this.props.onChangeRepoList}/>
        {repoDetails}
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    userName: state.userName,
    repoDataList: state.repoDataList,
    repoDetails: state.repoDetails,
    selectedRepo: state.selectedRepo,
    noRepoForUserName: state.noRepoForUserName
  };
};

const mapDispatchToProps = dispatch => {

  return {
    onUserNameChange: (event) => dispatch(actions.userNameChange(event.target.value)),
    onClickGetRepos: (userName) => dispatch(actions.getUserRepos(userName)),
    onChangeRepoList: (event) => dispatch(actions.getRepoDetails(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GitRepoFetcher);
