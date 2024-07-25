import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Toast from "react-native-toast-message";

export const getUserUnits = createAsyncThunk(
  "usersUnits/getUserUnits",
  async (token, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        `https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/houses/user-houses`,
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
        text2: "لم نتمكن من الحصول على معلومات",
      });
      return rejectWithValue(error.response.data);
    }
  }
);
