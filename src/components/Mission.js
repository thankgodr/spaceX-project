import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMissionAction } from '../reducers/missions/Missions';

const Mission = (props) => {
  const { amission, counter } = props;
  const dispatch = useDispatch();
  const updateClickHandler = () => {
    dispatch(reserveMissionAction(amission.id));
    console.log('mission updated');
  };
  if ((counter % 2) > 0) {
    return (
      <tr key={amission.id} className="impair">
        <td className="td_title">{ amission.name }</td>
        <td className="td_description">{ amission.description }</td>
        <td className="td_actions">
            <button className="button_mission_status">{amission.reserved ? 'Member' : 'not a member'}</button>
            <button className="button_mission_join"onClick={updateClickHandler}>{amission.reserved ? 'Leave Mission' : 'Join Mission'}</button>
        </td>
      </tr>
    );
  }

  return (
      <tr key={amission.id} className="pair">
        <td className="td_title">{ amission.name }</td>
        <td className="td_description">{ amission.description }</td>
        <td className="td_actions">
            <button className="button_mission_status">{amission.reserved ? 'Member' : 'not a member'}</button>
            <button className="button_mission_join"onClick={updateClickHandler}>{amission.reserved ? 'Leave Mission' : 'Join Mission'}</button>
        </td>
      </tr>
  );
};

Mission.propTypes = {
  amission: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
  counter: PropTypes.number,
};

export default Mission;