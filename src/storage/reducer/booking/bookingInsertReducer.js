const initialState = {
    data: null,
    isloading: false,
    isError: null
  };
  
  const bookingInsertReducer = (state = initialState, action) => {
    switch (action.type) {
      case "BOOKING_INSERT_REQUEST":
        return {
          ...state,
          data: null,
          isLoading: true,
          isError: null
        };
        case "BOOKING_INSERT_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          isError: null
        };
        case "BOOKING_INSERT_FAILED":
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
  
  export default bookingInsertReducer;
  