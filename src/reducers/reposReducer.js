import {
  LOAD_REPOS_REQUEST,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_FAILURE
} from '../actions/types';

export const initialState = {
  error: null,
  isLoading: false,
  repos: null
}

export default function repos(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS_FAILURE:
      return { ...state, error: action.error, isLoading: false };
    case LOAD_REPOS_REQUEST:
      return { ...state, isLoading: true };
    case LOAD_REPOS_SUCCESS:
      return { ...state, isLoading: false, repos: action.data }
    default:
      return state;
  }
}
