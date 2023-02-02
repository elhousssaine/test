import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setErrors } from "../reducers/errorReducers";

// Register User
export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      await axios.post("/api/users/register", userData).then((res) => {
        console.log(res);
        dispatch(setErrors({}));
      });
    } catch (error) {
      // return custom error message from API if any
      dispatch(setErrors(error.response.data));
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//login user
export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue, dispatch }) => {
    const access = await axios
      .post("/api/users/login", userData)
      .then((res) => {
        // Save to localStorage
        // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("userToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        dispatch(setErrors({}));
        return {
          token: token,
          success: decoded.success,
          userdata: {
            id: decoded.id,
            name: decoded.name,
            isAdmin: decoded.isAdmin,
            email: decoded.email,
          },
        };
      })
      .catch((error) => {
        // return custom error message from API if any
        dispatch(setErrors(error.response.data));
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      });
    return access;
  }
);
