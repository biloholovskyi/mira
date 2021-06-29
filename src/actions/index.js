const loginUser = (user) => {
  return {
    type: 'LOGIN_USER',
    user
  }
}

const getAllUsers = (users) => {
  return {
    type: 'GET_ALL_USERS',
    users
  }
}

export {
  loginUser,
  getAllUsers
}