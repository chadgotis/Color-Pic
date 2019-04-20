import axios from 'axios';

// Check token & load user
export const loadUser = (token) => dispatch => {
  // User loading
  dispatch({ type: 'USER_LOADING'});

  axios
    .get('/api/auth/user', tokenConfig(token))
    .then(res =>
      dispatch({
        type: 'USER_LOADED',
        payload: res.data
      })
    )
    .catch(err => {
      // dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: 'AUTH_ERROR'
      });
    });
};

// Register User
export const registerUser = (email, password) => dispatch => {
  console.log(email);
  console.log(password);
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post('/api/users', body, config)
    .then(res =>
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data
      })
    )
    .catch(err => {
      console.log('register fail!')
      dispatch({
        type: 'REGISTER_FAIL'
      });
    });
};

// Set up local storage for tokens
// Setup config/headers and token
export const tokenConfig = () => {
  // Get token from localstorage
  const token = localStorage.getItem('token');

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
