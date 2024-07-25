import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Toast from "react-native-toast-message";

// Get Favourites Units
export const getFavouritesUnit = createAsyncThunk(
  "favouriteUnits/getFavouritesUnit",
  async (token, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        `https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/houses/myFavourites`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
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

// Add Favourites Units
export const addFavouritesUnit = createAsyncThunk(
  "favouriteUnits/addFavouritesUnit",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(
        `https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/houses/make-favourite/${item.id}`,
        { id: item.id },
        {
          headers: {
            Authorization: `Bearer ${item.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      Toast.show({
        type: "success",
        text1: "تمت الإضافة بنجاح",
        text2: "تمت إضافة الوحدة إلى المفضلة بنجاح",
      });
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
// Add Favourites Units
export const removeFavouritesUnit = createAsyncThunk(
  "favouriteUnits/removeFavouritesUnit",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(
        `https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/houses/remove-favourite/${item.id}`,
        { id: item.id },
        {
          headers: {
            Authorization: `Bearer ${item.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      Toast.show({
        type: "success",
        text1: "تمت الحذف بنجاح",
        text2: "تمت حذف الوحدة من المفضلة بنجاح",
      });
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
