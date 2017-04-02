import {
  LOAD_REPOS_FAILURE,
  LOAD_REPOS_SUCCESS
} from '../actions/types';

const asyncMiddleware = store => next => async (action) => {
  if (action.payload instanceof Promise) {
    try {
      const response     = await action.payload;
      const responseJson = await response.json();
      const newAction = { type: LOAD_REPOS_SUCCESS, data: responseJson.items };
      next(newAction);
    } catch (error) {
      const newAction = { type: LOAD_REPOS_FAILURE, error };
      next(newAction);
    }
  } else {
    next(action);
  }
}

export default asyncMiddleware
