import { configureStore } from '@reduxjs/toolkit';import rockets from './slice/rockets/rockets';
import missionReducer from './slice/mission/Missions';

const store = configureStore({
  reducer: {
    rockets,
    missions: missionReducer,
  },
});

export default store;