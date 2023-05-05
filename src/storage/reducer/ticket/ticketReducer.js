const initialState = {
    data: null,
    isloading: true,
    isError: null
  };
  
  const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
      case "TICKET_REQUEST":
        return {
          ...state,
          data: null,
          isLoading: true,
          isError: null
        };
        case "TICKET_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          isError: null
        };
        case "TICKET_FAILED":
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
  
  export default ticketReducer;
  