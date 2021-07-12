import React from 'react';

var CHALLENGE_BLOCK = function({info}) {
  let { challenger, email, scenario, point_level, notes } = info;
  return (
    <div className="challenge-block">
      Challenger: {challenger}<br />
      email: {email}<br />
      scenario: {scenario}<br />
      point_level: {point_level}<br />
      notes: {notes}
    </div>
  );
}

export default CHALLENGE_BLOCK;