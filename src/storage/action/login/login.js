import axios from "axios";

export const loginAction = (data, setCookies, Router) => async (dispatch) => {

  try {
    dispatch({ type: "LOGIN_REQUEST" });
    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, data);
    setCookies("token", result.data.data.token, {
        path:'/'
    })
    setCookies("id", result.data.data.id, {
      path:'/'
  })
  setCookies("photo", result.data.data.photo, {
    path:'/'
  })
    const users = result.data.data;
    dispatch({ type: "LOGIN_SUCCESS", payload: users },
    Router.push('/home')
    );
  } catch (err) {
    dispatch({
      type: "LOGIN_FAILED",
      payload: err.message,
    });
  }
};