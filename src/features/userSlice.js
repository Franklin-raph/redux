import { createSlice } from "@reduxjs/toolkit";
import { UserData } from '../FakeData'
export const userSlice = createSlice({
    name:'users',
    initialState: {value: UserData},
    reducers:{
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            console.log(state.UserData)
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },
        updateUser: (state, action) => {
            state.value.map((user) => {
                if(user.id === action.payload.id){
                    user.name = action.payload.name;
                }
            })
        }
    }
})

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;