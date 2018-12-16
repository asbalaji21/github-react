import Axios from 'axios';

export const USER_NAME_CHANGE = 'USER_NAME_CHANGE';
export const GET_USER_REPOS = 'GET_USER_REPOS';
export const GET_REPO_DETAILS = 'GET_REPO_DETAILS';

export const userNameChange = (userName) =>
{
    return {

        type: USER_NAME_CHANGE,
        userName: userName
    }
}

export const getUserRepos = userName =>
{
    return dispatch =>
    {
        Axios.get("https://api.github.com/users/"+userName+"/repos").then(response => 
        {
          if(response.data.length === 0)
          {
            dispatch( {
                type: GET_USER_REPOS,
                payload: {
                    noRepoForUserName: true, 
                    repoDataList: null, 
                    repoDetails: null, 
                    selectedRepo: ""
                }
            });
          }
          else
          {
            dispatch( {
                type: GET_USER_REPOS,
                payload: {
                    noRepoForUserName: false, 
                    repoDataList: response.data, 
                    repoDetails: null, 
                    selectedRepo: ""
                }
            });
          }
        });
    }
}

export const getRepoDetails = selectedRepo =>
{

    console.log(selectedRepo);
    return dispatch =>
    {
        if(selectedRepo === '')
        {
            dispatch( {
                type: GET_REPO_DETAILS,
                payload: {
                    selectedRepo: selectedRepo
                }

            })
        }
        else
        {
            Axios.get("https://api.github.com/repos/"+selectedRepo).then(response => 
            
            dispatch( {
                type: GET_REPO_DETAILS,
                    payload: {
                        selectedRepo: selectedRepo,
                        repoDetails: {
                            name: response.data.name,
                            description: response.data.description == null ? 'NA' : response.data.description,
                            defaultBranch: response.data.default_branch,
                            createdAt: response.data.created_at
                            }
                    }
            })
        );
        }
    }
}

