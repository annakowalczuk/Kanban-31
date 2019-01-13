import React from 'react';
import PropTypes from 'prop-types';
import NotesContainer from '../Note/NotesContainer';
import Edit from '../../components/Edit';

import styles from './Lane.css';
import buttons from '../../buttons.css';

class Lane extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { connectDropTarget, lane, laneNotes, updateLane, addNote, deleteLane, editLane } = this.props;
    const laneId = lane.id;

    return connectDropTarget(
      <div className={styles.Lane}>
        <div className={styles.LaneHeader}>
          <div className={styles.LaneDelete}>
            <button className={buttons.kanbanButtonDelete} onClick={() => deleteLane(laneId)}>X</button>
          </div>
          <div className={styles.LaneAddNote}>
            <button className={buttons.kanbanButton} onClick={() => addNote({ task: 'New Note' }, laneId)}>Add Note</button>
          </div>
          <Edit
            className={styles.LaneName}
            editing={lane.editing}
            value={lane.name}
            onValueClick={() => editLane(lane.id)}

            onUpdate={name => updateLane({ ...lane, name, editing: false })}
          />
        </div>
        <NotesContainer
          notes={laneNotes}
          laneId={laneId}
        />
      </div>
    );
  }
}

Lane.propTypes = {
  lane: PropTypes.object,
  laneNotes: PropTypes.array,
  addNote: PropTypes.func,
  updateLane: PropTypes.func,
  deleteLane: PropTypes.func,
  editLane: PropTypes.func,
  connectDropTarget: PropTypes.func,
};

export default Lane;
