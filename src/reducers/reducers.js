const initialState = {
  // данные пользователя
  user: {
    name: '', // email
    password: '',
    photo: '',
    status: null
  },

  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // передаем данные пользователя
    case 'LOGIN_USER':
      const newUser = {
        ...action.user,
        status: true
      }

      return {
        ...state,
        user: newUser
      }

    case 'GET_ALL_USERS':
      return {
        ...state,
        users: action.users
      }

    default:
      return state;
  }
}

export default reducer;