import axios from "axios";

export const TicketAction = () => async (dispatch) => {
  try {
    dispatch({ type: "TICKET_REQUEST" });
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/ticket`)

    console.log(result.data.data)
    const ticket = result.data.data;
    dispatch({ type: "TICKET_SUCCESS", payload: ticket })
  } catch (err) {
    dispatch({
      type: "TICKET_FAILED",
      payload: err.response.data.message,
    });
  }
};