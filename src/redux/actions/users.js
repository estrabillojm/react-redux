import { SET_USER_INFO } from "../types";
import { DELETE_USER } from "../types";

export function setUserInfo(payload){
    return {
        type: SET_USER_INFO,
        payload
    }
}

export function deleteUser(payload){
    return {
        type: DELETE_USER,
        payload
    }
}