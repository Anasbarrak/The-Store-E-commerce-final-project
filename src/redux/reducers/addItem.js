import { LOG_OUT } from "../Actiontype/Actiontype";
import { delItem } from "../actions";

const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM" : return [
            ...state,
            action.payload
        ]
        case "DELITEM" :
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
            case LOG_OUT:
                return state=[]
        
        default: return state;
   
    }
}

export default addItems;