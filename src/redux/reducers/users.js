import { SET_USER_INFO } from '../types'
import { DELETE_USER } from '../types'

const initialState = {
    info: {name: ""}
}
const usersReducer = (state = initialState, action = {}) => {
    switch(action.type){
        case SET_USER_INFO:
            return {
                ...state,
                data: { ...action.payload }
            }
        case DELETE_USER:
            console.log("PayLOAD",action.payload.id)
            return {
                ...action.payload
            }
        default: return state
    }
}
export default usersReducer