import fetch from 'isomorphic-fetch';
import * as actionTypes from '../actions/actionTypes';

function getStories() {
  return {
    type: actionTypes.STORIES_GET_ALL,
  };
}

function getStoriesSuccess(stories, query) {
  return {
    type: actionTypes.STORIES_GET_ALL_SUCCESS,
    stories,
    query,
  };
}

function getStoriesError(error) {
  return {
    type: actionTypes.STORIES_GET_ALL_ERROR,
    error,
  };
}

export function sendGetStoriesRequest(query = '', page = 0) {
  return (dispatch) => {
    dispatch(getStories());
    /* eslint-disable consistent-return */
    return fetch(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=100`)
      .then(response => response.json())
      .then(stories => dispatch(getStoriesSuccess(stories, query)))
      .catch(error => dispatch(getStoriesError(error)));
  };
}
