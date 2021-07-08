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
  // success message
  successModal: false
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

    case 'SHOW_SUCCESS_MODAL':
      return {
        ...state,
        successModal: action.text
      }

    default:
      return state;
  }
}

export default reducer;