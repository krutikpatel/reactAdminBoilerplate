import backend from '../apis/backend';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_TODO,
    FETCH_TODOS
    /*
    CRUD operation go here
    */
  } from './types';
  
  export const signIn = userId => async (dispatch) => {
    /*
    TODO: need to make authenticate api call ?
    */
  /*
    return {
      type: SIGN_IN,
      payload: userId
    };
  */
    dispatch({ type: SIGN_IN, payload: userId });
    //history.push('/'); ????
  };
  
  export const signOut = () => async (dispatch) => {
    /*
    return {
      type: SIGN_OUT
    };
    */
    dispatch({ type: SIGN_OUT, payload: {} });
  };

  export const createTodo = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await backend.post('/todos', { ...formValues, userId });
  
    dispatch({ type: CREATE_TODO, payload: response.data });
    //history.push('/');
  };

  export const fetchTodos = () => async dispatch => {
    const response = await backend.get('/todos');
  
    dispatch({ type: FETCH_TODOS, payload: response.data });
  };