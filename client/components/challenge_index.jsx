import React from 'react';
import axios from 'axios';
import CHALLENGE_BLOCK from './challenge_block.jsx';

class CHALLENGE_INDEX extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: null
    };
  };

  componentDidMount() {
    axios.get('/api/challenges')
    .then((results) => {
      this.setState({challenges: results});
    })
    .catch((error) => {
      console.log('Error fetching challenge data from API.');
    })
  }

  render() {
    let { challenges } = this.state;
    if (challenges) {
      let challenge_components = this.state.challenges.map((challenge) => {
        <CHALLENGE_BLOCK info={challenge} key={challenge.id}/>
      });
      return (
        <div className="challenge-index">
          {challenge_components}
        </div>
      )
    } else {
      return (
        <div className="challenge-index">
          Loading challenges...
      </div>
      );
    };
  };
}

export default CHALLENGE_INDEX;