import { GET_CURRENT, LOGIN, LOG_OUT, REGISTER } from "../Actiontype/Actiontype"

const initialState = {
    user:{}
}

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case REGISTER:
  case LOGIN:
  localStorage.setItem("token",payload.token)
    return { ...state, user:payload.user }
    case GET_CURRENT :
      console.log(payload)
        return {...state,user:payload.user}
        case LOG_OUT:
          localStorage.removeItem("token")
          return {user:{}}
  default:
    return state
  }
}
export default Reducer;