import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/Missions';

const store = configureStore({
  reducer:
  {
    missions: missionReducer,
  },
});

export default store;