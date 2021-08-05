const initialState = {
  // данные пользователя
  user: {
    name: '',
    email: '',
    password: '',
    photo: '',
    user_balance: '',
    instagram: ''
  },

  users: [],
  balance: [],
  //все заявки на вывод средств
  cashout: [],
  deposit: [],
  // success message
  successModal: false,
  // error message
  errorModal: false
};

const reducer = (state= initialState, action) => {
  switch (action.type) {
    // передаем данные пользователя
    case 'LOGIN_USER':

      return {
        ...state,
        user: action.user
      }

    case 'GET_ALL_USERS':
      return {
        ...state,
        users: action.users
      }

    case 'GET_ALL_BALANCE':
      return {
        ...state,
        balance: action.balance
      }

    case 'SHOW_SUCCESS_MODAL':
      return {
        ...state,
        successModal: action.text
      }

    case 'GET_ALL_CASHOUT':
      return {
        ...state,
        cashout: action.cashout
      }

    case 'GET_ALL_DEPOSIT':
      return {
        ...state,
        deposit: action.deposit
      }

    case 'SHOW_ERROR_MODAL':
      return {
        ...state,
        errorModal: action.text
      }

    default:
      return state;
  }
}

export default reducer;