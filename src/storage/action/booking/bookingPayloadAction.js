import axios from "axios";

export const BookingPayloadAction = (token) => async (dispatch) => {
  

  try {
    dispatch({ type: "BOOKING_PAYLOAD_REQUEST" });

    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/booking/mybooking`, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    const booking = result.data.data;
    dispatch({ type: "BOOKING_PAYLOAD_SUCCESS", payload: booking })
  } catch (err) {
    dispatch({
      type: "BOOKING_PAYLOAD_FAILED",
      payload: err.response.data.message,
    });
  }
};