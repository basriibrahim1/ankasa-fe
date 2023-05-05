import axios from "axios";

export const RegisterAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_REQUEST" });

    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, data)
    const user = result.data.data;
    dispatch({ type: "REGISTER_SUCCESS", payload: user })
  } catch (err) {
    dispatch({
      type: "REGISTER_FAILED",
      payload: err.response.data.message,
    });
  }
};