import { combineReducers } from "redux";
import userPayloadReducer from "./user/userPayloadReducer";
import userUpdateReducer from "./user/userUpdateReducer";
import ticketReducer from "./ticket/ticketReducer";
import ticketIdReducer from "./ticket/ticketIdReducer";
import bookingPayloadReducer from "./booking/bookingPayloadReducer";
import bookingInsertReducer from "./booking/bookingInsertReducer";
import loginReducer from "./auth/login";
import registerReducer from "./auth/register";


const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,

    userPayload: userPayloadReducer,
    userUpdate: userUpdateReducer,

    ticket: ticketReducer,
    ticketId: ticketIdReducer,

    bookingPayload: bookingPayloadReducer,
    bookingInsert: bookingInsertReducer
})


export default rootReducer