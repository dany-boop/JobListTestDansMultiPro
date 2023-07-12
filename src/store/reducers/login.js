import { createSlice } from "@reduxjs/toolkit";
// import { getJobList } from "../../api/summary";

const initialState = {
    username: '',
    password: ''
}

const login = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername(state, action) {
            try {
                state.username = action.payload
            }
            catch (e) {
                console.log(e);
            }
        },
        setPassword(state, action) {
            try {
                state.password = action.payload
            }
            catch (e) {
                console.log(e);
            }
        }
    }
})

//getter
export const getUsername = state => state.login.username
export const getPassword = state => state.login.password

//setter
export const { setUsername, setPassword } = login.actions

export default login.reducer