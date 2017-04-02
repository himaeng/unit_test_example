import {
  LOAD_REPOS_REQUEST,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_FAILURE,
  SELECT_REPO
} from './types';

export const loadReposRequest = (endPoint) => {
  return ({
    type: LOAD_REPOS_REQUEST,
    payload: fetch(endPoint)
  });
};

export const selectRepo = (id) => {
  return ({
    type: SELECT_REPO,
    id
  })
}
