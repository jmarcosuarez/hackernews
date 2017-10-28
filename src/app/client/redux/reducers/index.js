import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import stories from './story';

export default combineReducers({
  stories,
  routing: routerReducer,
});
