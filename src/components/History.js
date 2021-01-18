import React, { Component } from 'react';

class History extends Component {
  render () {
    return(
      <div id="history-controls">
        <button onClick={this.props.undo}>undo</button>
        <button onClick={this.props.redo}>redo</button>
      </div>
    )
  }
}

export default History;
