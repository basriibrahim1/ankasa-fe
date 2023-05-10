import axios from "axios";

export const BookingUpdateAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "BOOKING_UPDATE_REQUEST" });
    const result = await axios.put(`${process.env.REACT_APP_BASE_URL}/booking/${id}`)
    const booking = result.data.data;
    dispatch({ type: "BOOKING_UPDATE_SUCCESS", payload: booking })
  } catch (err) {
    dispatch({
      type: "BOOKING_UPDATE_FAILED",
      payload: err.response.data.message,
    });
  }
};