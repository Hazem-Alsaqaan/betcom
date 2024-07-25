import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Toast from "react-native-toast-message";

// Get All Units Inside Home Page Desiplayed In Pagination
export const getAllUnits = createAsyncThunk(
  "units/getAllUnits",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/houses?&page=${item.page}&limit=8&allowPagination=true`,
        {
          headers: {
            Authorization: `Bearer ${item?.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.docs;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      Toast.show({
        type: "error",
        text1: "Error",
        text2: err.response.data.errorMessage,
      });
      return rejectWithValue(err.response.data);
    }
  }
);

// Get Units By Search Function
export const searchUnits = createAsyncThunk(
  "units/searchUnits",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/houses?&minimum_price=${item.minimumPrice}&highest_price=${item.heighestPrice}&rooms=${item.rooms}&page=${item.page}&limit=20&allowPagination=true`,
        {
          headers: {
            Authorization: `Bearer ${item?.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.docs;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      Toast.show({
        type: "error",
        text1: "Error",
        text2: err.response.data.errorMessage,
      });
      return rejectWithValue(err.response.data);
    }
  }
);

// Get One Unit By Id
export const getSpecificUnit = createAsyncThunk(
  "units/getSpecificUnit",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        `https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/houses/${item.id}`,
        {
          headers: {
            Authorization: `Bearer ${item?.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      Toast.show({
        type: "error",
        text1: "خطأ ما",
        text2: "لم نتمكن من الحصول على معلومات عن هذه الوحدة",
      });
      return rejectWithValue(error.response.data);
    }
  }
);
