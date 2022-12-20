import React from "react";
const Mission = (amission) => (<tr>
  <td className="td_title">{ amission.title }</td>
  <td className="td_description">{ amission.description }</td>
  <td className="td_actions">
      <button className="button_mission_status">{ Mission.status}</button>
      <button className="button_mission_join">Join Mission</button>
  </td>
</tr>)