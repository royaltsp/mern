const axios = require('axios')

export const saveUser = user => {
  return {
    type: "SAVE_USER",
    payload: user
  }
}

export const signIn = user => {
  return dispatch => {
    return axios.post('http://localhost:5001/check-user', JSON.stringify(user), {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then(res => {
      if (!res.msg) {
        if (localStorage.setItem('ecommToken', res.data.token)) {
          dispatch({
            type: "SAVE_USER",
            payload: res.data.user
          })
        } else
          return false
      } else
        return false
    }).catch(err => {
      console.error(err);
      return false;
    })
  }
}

export const getUserByToken = token => {
  return dispatch => {
    const token = localStorage.ecommToken;
    if (token) {

    }
  }
}