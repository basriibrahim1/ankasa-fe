const initialState = {
    data: null,
    isloading: false,
    isError: null
  };
  
  const userPayloadReducer = (state = initialState, action) => {
    switch (action.type) {
      case "USER_PAYLOAD_REQUEST":
        return {
          ...state,
          data: null,
          isLoading: true,
          isError: null
        };
        case "USER_PAYLOAD_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          isError: null
        };
        case "USER_PAYLOAD_FAILED":
        return {
          ...state,
          data: [],
          isLoading: false,
          isError: action.payload
        };
        default:
        return state;
    }
  };
  
  export default userPayloadReducer;
  