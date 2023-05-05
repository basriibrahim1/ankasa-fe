const initialState = {
    data: null,
    isloading: false,
    isError: null
  };
  
  const userUpdateReducer = (state = initialState, action) => {
    switch (action.type) {
      case "USER_UPDATE_REQUEST":
        return {
          ...state,
          data: null,
          isLoading: true,
          isError: null
        };
        case "USER_UPDATE_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          isError: null
        };
        case "USER_UPDATE_FAILED":
        return {
          ...state,
          data: null,
          isLoading: false,
          isError: action.payload
        };
        default:
        return state;
    }
  };
  
  export default userUpdateReducer;
  