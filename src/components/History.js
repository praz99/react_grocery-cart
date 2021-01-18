import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { undo, redo } from '../reducers/actions';

const History = ({ undo, redo }) => (
  <div id="history-controls">
    <button type="button" onClick={undo}>undo</button>
    <button type="button" onClick={redo}>redo</button>
  </div>
);

History.propTypes = {
  undo: PropTypes.func.isRequired,
  redo: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    undo: () => dispatch(undo()),
    redo: () => dispatch(redo()),
  };
}
export default connect(null, mapDispatchToProps)(History);
