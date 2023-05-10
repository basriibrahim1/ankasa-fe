import axios from "axios";
import {useCookies} from 'react-cookie'

export const userUpdateAction = (data, token) => async (dispatch) => {
  try {
    dispatch({ type: "USER_UPDATE_REQUEST" });
    const result = await axios.put(`${process.env.REACT_APP_BASE_URL}/users`, data, {
        headers: {
            "Content-type" : "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        }
    })
    const ticket = result.data.data;
    dispatch({ type: "USER_UPDATE_SUCCESS", payload: ticket })
  } catch (err) {
    dispatch({
      type: "USER_UPDATE_FAILED",
      payload: err.response.data.message,
    });
  }
};