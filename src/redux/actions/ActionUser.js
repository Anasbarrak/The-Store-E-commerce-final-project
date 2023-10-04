import axios from "axios"
import { FAIL, GET_CURRENT, LOGIN, REGISTER, LOGOUT, LOG_OUT } from "../Actiontype/Actiontype"
import { alert_error } from "./ErrorAction"

export const RegisterUser = (data, navigate)=> async (dispatch)=>{
    try {
       const res= await axios.post("/user/register", data)
       console.log(res)
        dispatch({
            type: REGISTER, 
            payload: res.data
        })
        navigate("/")
    } catch (error) {
        console.log(error)
        error.response.data.errors.forEach((el) => {
            dispatch(alert_error(el.msg));
          });
          dispatch({ type: FAIL, payload: error.response.data });
        }
    }
    export const LoginUser = (data, navigate)=> async (dispatch)=>{
        try {
           const res= await axios.post("/user/login", data)
           console.log(res)
            dispatch({
                type: LOGIN, 
                payload: res.data
            })
            navigate("/")
        } catch (error) {
            console.log(error)
            error.response.data.errors.forEach((el) => {
                dispatch(alert_error(el.msg));
              });
              dispatch({ type: FAIL, payload: error.response.data });
            }
        }
        export const getCurrent= ()=>async(dispatch)=>{
            const config = {
             headers: {
                 token: localStorage.getItem("token"),
               }
            }
             try {
                 const res = await axios.get("/user/getuser",config)
                 dispatch({
                     type:GET_CURRENT,
                     payload:res.data
                 })
             } catch (error) {
                 console.log(error)
             }
         }
         export const logout=(navigate)=>{
            navigate('/')
            return ({type:LOG_OUT})};

    