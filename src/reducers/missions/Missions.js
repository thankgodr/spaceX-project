import missionApi from '../../api/missionApi';

const MISSION_GETTED = 'MISSION_GETTED';
const MISSION_STATUS_UPDATED = 'MISSION_STATUS_UPDATED';
const initialState = [];

export const getMissionsAction = () => async (dispatch) => {
  const allMissions = await missionApi.getMissions();
  dispatch({
    type: MISSION_GETTED,
    payload: allMissions,
  });
};

export const reserveMissionAction = (idMission) => ({
  type: MISSION_STATUS_UPDATED,
  payload: idMission,
});

// reducer
const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case MISSION_GETTED: return (state === initialState) ? action.payload : state;
    case MISSION_STATUS_UPDATED: {
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }

        return { ...mission, reserved: !mission.reserved };
      });
    }
    default: return state;
  }
};

export default missionReducer;