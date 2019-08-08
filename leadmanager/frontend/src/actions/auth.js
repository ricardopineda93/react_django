import axios from 'axios';
import { returnErrors } from './messages';

import { USER_LOADED, USER_LOADING, AUTH_ERROR } from './types';

// check token && load user

export const loadUser = () => (dispatch, getState) => {
  // loading user
  dispatch({ type: USER_LOADING });

  // getting token
  const token = getState().auth.token;

  // headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // if there is a token, add to the header config for authorization from backend
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  axios
    .get('/api/auth/user', config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};
