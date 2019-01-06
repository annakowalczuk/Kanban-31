import React from 'react';
import PropTypes from 'prop-types';
import Lane from './LaneContainer.js';
import style from './Lane.css';

const Lanes = ({ lanes }) => {
  return (
    <div className={style.LanesContainer} >{lanes.map(lane =>
      <Lane className="lane" key={lane.id} lane={lane} />
    )}</div>
  );
};

Lanes.propTypes = {
  lanes: PropTypes.array,
};

export default Lanes;
