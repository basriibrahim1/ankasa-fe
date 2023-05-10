// userReducer.js
const initialState = {
    photo: '',
  };
  
  const userPhotoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_USER_PHOTO':
        return {
          ...state,
          photo: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userPhotoReducer;