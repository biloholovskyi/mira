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

const getAllCashout = (cashout) => {
  return {
    type: 'GET_ALL_CASHOUT',
    cashout
  }
}

const getAllDeposit = (deposit) => {
  return {
    type: 'GET_ALL_DEPOSIT',
    deposit
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
  getAllBalance,
  getAllCashout,
  getAllDeposit
}