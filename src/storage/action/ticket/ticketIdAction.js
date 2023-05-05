import axios from "axios";

export const TicketIdAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "TICKET_ID_REQUEST" });

    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/ticket/${id}`)
    const ticket = result.data.data;
    dispatch({ type: "TICKET_ID_SUCCESS", payload: ticket })
  } catch (err) {
    dispatch({
      type: "TICKET_ID_FAILED",
      payload: err.response.data.message,
    });
  }
};