export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE after finished developing...
  token: 
    'BQBK90j0iVGVLhQKKfaxVfR8R2RoH7tr0K6DreEHKKQh8h7pMHliTWjSR9qGjMzO2HbGzjRhqSUvBa3DyCIyKFoXzHyvjdaVKGNKpiGoQ6eSXHH9rl9t-t6Jhod1GZ-5XBD-1-NlmheNBrsFFSXnMK_L-Wbmjk3Ywg',
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
        };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  };
}

export default reducer;