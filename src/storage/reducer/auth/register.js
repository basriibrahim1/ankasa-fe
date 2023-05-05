const initialState = {
    data: null,
    isloading: false,
    isError: null
  };
  
  const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER_REQUEST":
        return {
          ...state,
          data: null,
          isLoading: true,
          isError: null
        };
        case "REGISTER_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          isError: null
        };
        case "REGISTER_FAILED":
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
  
  export default registerReducer;
  