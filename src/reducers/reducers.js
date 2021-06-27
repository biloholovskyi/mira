const initialState = {
  // данные пользователя
  user: {
    login: '',
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

    default:
      return state;
  }
}

export default reducer;