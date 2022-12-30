

import {configureStore, createSlice} from '@reduxjs/toolkit'



export const direction = createSlice(
    {
        name:'direction',
        initialState:{
            value:'ltr'
        },
        reducers:{
            change:(state,action)=>{
             state.value = action.payload;
            }
        }
    }
)

export const User = createSlice(
    {
        name:'User',
        initialState:{
            value:false
        },
        reducers:{
            change:(state,action)=>{
             state.value = true;
            }
        }
    }
)








export const Store = configureStore(
    {
        reducer:{
           direction:direction.reducer,
           User:User.reducer
        }
    }
)