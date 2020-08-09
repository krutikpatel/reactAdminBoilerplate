import backend from '../apis/backend';
//import { Redirect } from 'react-router-dom'

import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_TODO,
    FETCH_TODOS
    /*
    CRUD operation go here
    */
  } from './types';
  
  /*
  knote: store token and userId in localStorage to persist after page refresh
    -this will help keep user logged in after page refresh

    refer : https://stackoverflow.com/questions/39097440/on-react-router-how-to-stay-logged-in-state-even-page-refresh
    for proper signIn method
  */
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
    // - Save the JWT in localStorage
    localStorage.setItem('authInfo', { token: "", userId: "userId" });
    //history.push('/'); //????    --> useing Redirect in Long2 page instead of this.
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