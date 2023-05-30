const initialState = {
    data: null,
    isloading: false,
    isError: null
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_REQUEST":
        return {
          ...state,
          data: null,
          isLoading: true,
          isError: null
        };
        case "LOGIN_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          isError: null
        };
        case "LOGIN_FAILED":
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
  
  export default loginReducer;
  