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

const getAllBalance = (balance) => {
  return {
    type: 'GET_ALL_BALANCE',
    balance
  }
}

// передаем текст в success modal
const setSuccessModalText = (text) => {
  return {type: 'SHOW_SUCCESS_MODAL', text}
}

// передаем текст в success modal
const setErrorModalText = (text) => {
  return {type: 'SHOW_ERROR_MODAL', text}
}

export {
  loginUser,
  getAllUsers,
  setSuccessModalText,
  setErrorModalText,
  getAllBalance
}