import axios from "axios";

export const BookingInsertAction = (data, token) => async (dispatch) => {

  try {
    dispatch({ type: "BOOKING_INSERT_REQUEST" });
    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/booking`, data, {
        headers: {
            "Content-Type" : "Application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
    dispatch({ type: "BOOKING_INSERT_SUCCESS", payload: result })
  } catch (err) {
    dispatch({
      type: "BOOKING_INSERT_FAILED",
      payload: err.message,
    });
  }
};