const axios = require('axios')

export const signUp = user => {
  return axios.post('/add-user', JSON.stringify(user), {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(res => {
    if (!res.msg)
      return true
  }).catch(err => {
    console.error(err);
  })
}
