import React from 'react';
import Battle_report_block from './battle_report_block.jsx';
import Story_block from './story_block.jsx';

class Feed_column extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        The Feed Column!
        <Battle_report_block />
        <Story_block />
      </div>
    );
  }
};

export default Feed_column;