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

function attachStoriesSuccess(stories) {
  return {
    type: actionTypes.STORIES_ATTACH_ALL_SUCCESS,
    stories,
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
    return fetch(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=25`)
      .then(response => response.json())
      .then(
        page === 0
          ? stories => dispatch(getStoriesSuccess(stories, query))
          : stories => dispatch(attachStoriesSuccess(stories)),
          )
      .catch(error => dispatch(getStoriesError(error)));
  };
}
