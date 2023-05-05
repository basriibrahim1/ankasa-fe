const initialState = {
    data: null,
    isloading: false,
    isError: null
  };
  
  const ticketIdReducer = (state = initialState, action) => {
    switch (action.type) {
      case "TICKET_ID_REQUEST":
        return {
          ...state,
          data: null,
          isLoading: true,
          isError: null
        };
        case "TICKET_ID_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          isError: null
        };
        case "TICKET_ID_FAILED":
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
  
  export default ticketIdReducer;
  