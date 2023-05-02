import { createStore } from "redux";

const initialState = {
    name: "",
    email: "",
    password: "",
    isAuthenticated: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                name: action.name,
                email: action.email,
                password: action.password
            }
        case "LOGIN":
            return {
                ...state,
                name: action.name,
                email: action.email,
                password: action.password
            }
        default:
            return state;
    }
}

export default createStore(reducer);