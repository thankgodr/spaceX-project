import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const GET_ROCKETS = 'spacexproject/redux/slice/rockets/get_rockets';
const rocketURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const getRockets = createAsyncThunk(GET_ROCKETS, () => {
  console.log('Action called');
  return axios.get(rocketURL).then((response) => response);
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: {
    [getRockets.fulfilled]: (state, action) => {
      const rawData = action.payload.data;
      const newRockets = rawData.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        type: rocket.rocket_type,
        flickr_images: rocket.flickr_images,
        description: rocket.description,
      }));
      return newRockets;
    },
  },
});

export default rocketsSlice.reducer;
