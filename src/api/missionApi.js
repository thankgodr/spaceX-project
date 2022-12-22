const baseURL = 'https://api.spacexdata.com/v3/missions';
const missionApi = {
  getMissions: async () => {
    const response = await fetch(baseURL);
    const data = await response.json();

    const missions = Object.entries(data).map(([key, mission]) => {
      if (key >= 0) {
        return {
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
          rerved: false,
        };
      }

      return {
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        rerved: false,
      };
    });
    return missions;
  },
};

export default missionApi;
