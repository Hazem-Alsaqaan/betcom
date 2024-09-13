import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Toast from "react-native-toast-message";

export const userLoginWithPhone = createAsyncThunk(
  "auth/userLoginWithPhone",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(
        `https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/auth/login`,
        {
          phone: item.phone,
          password: item.password,
        }
      );
      return res.data;
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
