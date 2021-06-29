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

// передаем текст в success modal
const setSuccessModalText = (text) => {
  return {type: 'SHOW_SUCCESS_MODAL', text}
}

export {
  loginUser,
  getAllUsers,
  setSuccessModalText
}