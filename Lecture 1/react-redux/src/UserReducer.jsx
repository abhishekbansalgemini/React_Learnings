import { createSlice } from "@reduxjs/toolkit";
import { data } from "./Data";
const userSlice = createSlice({
    name: "users",
    initialState : data,
    reducers: {
        addUser : (state, action) => {
            state.push(action.payload);
        },
        updateUser : (state, action) => {
            const {id, name, age} = action.payload;
            const findUpadtingUser = state.find(user => user.id == id);
            if(findUpadtingUser){
                findUpadtingUser.name = name;
                findUpadtingUser.age = age;
            }
        },
        deleteUser : (state, action) => {
            const {id} = action.payload;
            return state.filter(user => user.id !== id);
        }
    }
})
export const {addUser, updateUser, deleteUser} = userSlice.actions; 
export default userSlice.reducer;