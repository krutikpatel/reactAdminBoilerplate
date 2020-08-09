import _ from 'lodash';
import {
  //FETCH_STREAM,
  FETCH_TODOS,
  CREATE_TODO,
  //EDIT_STREAM,
  //DELETE_STREAM
} from '../actions/types';


export default (state = {}, action) => {
    switch (action.type) {
      case FETCH_TODOS:
        return { ...state, ..._.mapKeys(action.payload, 'id') };      
      case CREATE_TODO:
        return { ...state, [action.payload.id]: action.payload };
      default:
        return state;
    }
};
  
/*
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
*/