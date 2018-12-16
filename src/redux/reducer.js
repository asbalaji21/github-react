import * as actions from './actions';

const initialState = 
{
    userName: "",
    repoDataList: null,
    repoDetails: null,
    selectedRepo: "",
    noRepoForUserName: false
}

const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case actions.USER_NAME_CHANGE: return {
            ...state,
            userName : action.userName
        }
        case actions.GET_USER_REPOS: return {
            ...state,
            noRepoForUserName: action.payload.noRepoForUserName,
            selectedRepo: action.payload.selectedRepo,
            repoDataList: action.payload.repoDataList,
            repoDetails: action.payload.repoDetails
        }
        case actions.GET_REPO_DETAILS: return {
            ...state,
            selectedRepo: action.payload.selectedRepo,
            repoDetails: action.payload.repoDetails
        }
        default: return state;
    }
}

export default reducer;