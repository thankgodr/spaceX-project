import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_ROCKETS = 'spacexproject/redux/slice/rockets/get_rockets';
export const RESERVE_ROCKET = 'spacexproject/redux/slice/rockets/reserve_rockets';
export const CANCEL_RESERVATION = 'spacexproject/redux/slice/rockets/cancel_reservation';
const rocketURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const getRockets = createAsyncThunk(GET_ROCKETS, () => {
  console.log('Action called');
  return axios.get(rocketURL).then((response) => response);
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveAction: (state, action) => {
      switch (action.payload.type) {
        case RESERVE_ROCKET:
          return state.map((rocket) => {
            if (rocket.id !== action.payload.id) {
              return rocket;
            }
            return { ...rocket, reserved: true };
          });
        case CANCEL_RESERVATION:
          return state.map((rocket) => {
            if (rocket.id !== action.payload.id) {
              return rocket;
            }
            return { ...rocket, reserved: false };
          });
        default:
          return state;
      }
    },
  },
  extraReducers: {
    [getRockets.fulfilled]: (state, action) => {
      const rawData = action.payload.data;
      const newRockets = rawData.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        type: rocket.rocket_type,
        flickr_images: rocket.flickr_images,
        description: rocket.description,
        reserved: false,
      }));
      return newRockets;
    },
  },
});

export const { reserveAction } = rocketsSlice.actions;
export default rocketsSlice.reducer;
