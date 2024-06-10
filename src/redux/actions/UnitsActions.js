import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import Toast from "react-native-toast-message"


export const getAllUnits = createAsyncThunk("units/getAllUnits", async(item, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/houses?&page=${item.page}&limit=8&allowPagination=true`, {
            headers:{
                Authorization: `Bearer ${item?.token}`,
                "Content-Type": "application/json"
            }
        })
        return res.data.docs
    }catch(err){
        if(!err.response){
            throw err
        }
            Toast.show({
                type: "error",
                text1: "Error",
                text2: err.response.data.errorMessage
            })
        return rejectWithValue(err.response.data)
    }
})




export const searchUnits = createAsyncThunk("units/searchUnits", async(item, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/houses?&minimum_price=${item.minimumPrice}&highest_price=${item.heighestPrice}&rooms=${item.rooms}&page=${item.page}&limit=20&allowPagination=true`, {
            headers:{
                Authorization: `Bearer ${item?.token}`,
                "Content-Type": "application/json"
            }
        })
        return res.data.docs
    }catch(err){
        if(!err.response){
            throw err
        }
            Toast.show({
                type: "error",
                text1: "Error",
                text2: err.response.data.errorMessage
            })
        return rejectWithValue(err.response.data)
    }
})


