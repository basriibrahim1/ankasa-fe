import axios from "axios";
import {useCookies} from 'react-cookie'

export const userPayloadAction = (token) => async (dispatch) => {
  try {

    dispatch({ type: "USER_PAYLOAD_REQUEST" });
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/myuser`, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    const user = result.data.data;
    console.log(user)
    dispatch({ type: "USER_PAYLOAD_SUCCESS", payload: user })
  } catch (err) {
    dispatch({
      type: "USER_PAYLOAD_FAILED",
      payload: err.response.data.message,
    });
  }
};