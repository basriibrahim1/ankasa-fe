import axios from "axios";

export const BookingIdAction = (id) => async (dispatch) => {
  

  try {
    dispatch({ type: "BOOKING_ID_REQUEST" });

    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/booking/${id}`)
    const booking = result.data.data;
    dispatch({ type: "BOOKING_ID_SUCCESS", payload: booking[0] })
  } catch (err) {
    dispatch({
      type: "BOOKING_ID_FAILED",
      payload: err.response.data.message,
    });
  }
};