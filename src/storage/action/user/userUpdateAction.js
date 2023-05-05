import axios from "axios";
import {useCookies} from 'react-cookie'

export const userPayloadAction = (data) => async (dispatch) => {
  try {
    const [cookies, setCookies] = useCookies
    const token = cookies.get("token")

    dispatch({ type: "USER_PAYLOAD_REQUEST" });
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`, data, {
        headers: {
            "Content-type" : "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        }
    })
    const ticket = result.data.data;
    dispatch({ type: "USER_PAYLOAD_SUCCESS", payload: ticket })
  } catch (err) {
    dispatch({
      type: "USER_PAYLOAD_FAILED",
      payload: err.response.data.message,
    });
  }
};