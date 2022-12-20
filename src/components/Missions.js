import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsAction } from '../redux/slice/mission/Missions';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionsAction());
  }, [dispatch]);
  const missionsData = useSelector((state) => state.missions);
  let cpt = 0;
  return (
    <div className="mission_Container">
      <table className="missions_List">

        <th className="mission_table_title td_title">Mission</th>
        <th className="mission_table_title td_description">description</th>
        <th className="mission_table_title td_actions">status</th>

        <tbody>
          {
            missionsData.map((missionData) => {
              cpt += 1;
              return (<Mission amission={missionData} key={cpt} />);
            })
          }

        </tbody>
      </table>
    </div>
  );
};

export default Missions;