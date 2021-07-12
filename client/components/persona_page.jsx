import React from 'react';
import Title_bar from './title_bar.jsx';
import Feed_column from './feed_column.jsx';
import Persistent_column from './persistent_column.jsx';

class Persona_page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Title_bar />
        <div className='column-container'>
          <Feed_column />
          <Persistent_column />
        </div>
      </React.Fragment>
    );
  }
};

export default Persona_page;