import fetch from 'isomorphic-fetch';
import * as actionTypes from '../actions/actionTypes';

function getStories() {
  return {
    type: actionTypes.STORIES_GET_ALL,
  };
}

function getStoriesSuccess(stories) {
  return {
    type: actionTypes.STORIES_GET_ALL_SUCCESS,
    stories,
  };
}

function getStoriesError(error) {
  return {
    type: actionTypes.STORIES_GET_ALL_ERROR,
    error,
  };
}

export function sendGetStoriesRequest() {
  return (dispatch, getState) => {
    if (getState().stories.hits.length) {
      return; // No need to fetch
    }
    dispatch(getStories());
    /* eslint-disable consistent-return */
    return fetch('https://hn.algolia.com/api/v1/search?query=functional&page=0&hitsPerPage=100')
      .then(response => response.json())
      .then(stories => dispatch(getStoriesSuccess(stories)))
      .catch(error => dispatch(getStoriesError(error)));
  };
}
