import { configureStore } from '@reduxjs/toolkit';
import rockets from './slice/rockets/rockets';

const store = configureStore({
  reducer: {
    rockets,

  },
});

export default store;