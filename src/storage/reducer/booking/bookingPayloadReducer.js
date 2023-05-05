const initialState = {
    data: null,
    isloading: false,
    isError: null
  };
  
  const bookingPayloadReducer = (state = initialState, action) => {
    switch (action.type) {
      case "BOOKING_PAYLOAD_REQUEST":
        return {
          ...state,
          data: null,
          isLoading: true,
          isError: null
        };
        case "BOOKING_PAYLOAD_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          isError: null
        };
        case "BOOKING_PAYLOAD_FAILED":
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
  
  export default bookingPayloadReducer;
  