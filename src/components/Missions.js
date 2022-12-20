import React from "react";

const Mission = () =>{
  const missions_data = [];
  return(
    <div className="mission_Container">
      <table className="missions_List">
        <tr>
          <th className="mission_table_title td_title">Mission</th>
          <th className="mission_table_title td_description">description</th>
          <th className="mission_table_title td_actions">status</th>
        </tr>
        <tbody>
          {
            missions_data.map((missionLine) =>(
              <Mission 
                key={missionLine.id}
                mission_data={missionLine}
              />
              ))
          }

        </tbody>
      </table>
    </div>
    );
}

export default Mission;