import { combineReducers } from "redux";
import userPayloadReducer from "./user/userPayloadReducer";
import userUpdateReducer from "./user/userUpdateReducer";
import ticketReducer from "./ticket/ticketReducer";
import ticketIdReducer from "./ticket/ticketIdReducer";
import bookingPayloadReducer from "./booking/bookingPayloadReducer";
import bookingInsertReducer from "./booking/bookingInsertReducer";
import loginReducer from "./auth/login";
import registerReducer from "./auth/register";
import userPhotoReducer from "./user/userPhoto";
import bookingIdReducer from "./booking/bookingIdReducer";
import bookingUpdateReducer from "./booking/bookingUpdateReducer";


const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,

    userPayload: userPayloadReducer,
    userUpdate: userUpdateReducer,
    userPhoto: userPhotoReducer,

    ticket: ticketReducer,
    ticketId: ticketIdReducer,

    bookingPayload: bookingPayloadReducer,
    bookingInsert: bookingInsertReducer,
    bookingId: bookingIdReducer,
    bookingUpdate: bookingUpdateReducer
})


export default rootReducer