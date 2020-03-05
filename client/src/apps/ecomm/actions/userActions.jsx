const axios = require('axios')
const jwt_decode = require('jwt-decode')

export const saveUser = user => {
  return {
    type: "SAVE_USER",
    payload: user
  }
}

export const removeUser = () => {
  return {
    type: "REMOVE_USER"
  }
}

export const signIn = user => {
  return dispatch => {
    return axios.post('/check-user', JSON.stringify(user), {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then(async res => {
      if (!res.msg) {
        await dispatch({
          type: "SAVE_USER",
          payload: res.data.user
        })
        localStorage.setItem('ecommToken', res.data.token)
      }
    }).catch(err => {
      console.error(err);
    })
  }
}

export const getUserByToken = token => {
  return dispatch => {
    const token = localStorage.ecommToken;
    if (token) {
      const decodedData = jwt_decode(token);
      dispatch({
        type: "SAVE_USER",
        payload: {
          _id: decodedData._id,
          firstName: decodedData.firstName,
          lastName: decodedData.lastName,
          email: decodedData.email
        }
      })
    }
  }
}