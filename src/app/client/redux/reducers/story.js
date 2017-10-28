import * as types from '../actions/actionTypes';
import initialState from './initialState';

function applyGetAllStories(state) {
  return { ...state, isFetching: true, error: null, hits: [] };
}
function applyGetAllSuccessStories(state, action) {
  const { stories, query } = action;
  return { 
    ...state,
    isFetching: false,
    error: null,
    hits: stories.hits,
    page: stories.page,
    query };
}

function applyGetAllErrorStories(state, action) {
  const { error } = action;
  return { ...state, isFetching: false, error: error.message };
}

export default function storyReducer(state = initialState, action) {
  switch (action.type) {
    case types.STORIES_GET_ALL:
      return applyGetAllStories(state);
    case types.STORIES_GET_ALL_SUCCESS:
      return applyGetAllSuccessStories(state, action);
    case types.STORIES_GET_ALL_ERROR:
      return applyGetAllErrorStories(state, action);
    default:
      return state;
  }
}
