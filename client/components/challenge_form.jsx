import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

export class CHALLENGE_FORM extends React.Component {
  componentDidMount() {
    console.log('Mounted');
    document.getElementById('challenge_input_submit').addEventListener('click', (event) => {
      this.submitClicked();
    })
  };

  submitClicked() {
    console.log('Submit clicked...');
    axios.post('/api/challenge', {
      name: document.getElementById('challenge_input_name').value,
      email: document.getElementById('challenge_input_email').value,
      point_level: document.getElementById('challenge_input_points').value,
      scenario: document.getElementById('challenge_input_scenario').value,
      notes: document.getElementById('challenge_input_notes').value,
    }).then(() => {
      console.log('post to server completed without error so far as the front end can see.')
    }).catch((error) => {
      console.log('Error returned when trying to post a new challenge: ', error);
    })
  };

  createAccountClicked() {
    this.props.history.push('create_account.html');
  }

  render() {
    return (
      <div className='column-container'>
        <div className='twenty-five-percent-wide'>&nbsp;</div>
        <div className='fifty-percent-wide'>
          <div className='column-container left-aligned-text'>
            <form id="challenge_input_form">
              <div className="form-fields">
                <div className="form-label">Your name:</div>
                <div><input type="text" id="challenge_input_name" /></div>
                <div className="form-label">Your eMail address:</div>
                <div className="form-value"><input type="text" id="challenge_input_email" /></div>
                <div className="form-label">Points:</div>
                <div className="form-value">
                  <select id="challenge_input_points">
                    <option value="500">500</option>
                    <option value="850">750</option>
                    <option value="1000">1000</option>
                    <option value="1350">1250</option>
                    <option value="1500">1500</option>
                    <option value="1850">1750</option>
                    <option value="2000">2000</option>
                  </select>
                </div>
                <div className="form-label">Scenario:</div>
                <div className="form-value">
                  <select id="challenge_input_scenario">
                  <option value="Sweep and Clear">Sweep and Clear</option>
                  <option value="Supply Drop">Supply Drop</option>
                  <option value="Assassinate">Assassinate</option>
                  </select>
                </div>
                <div className="form-label">Story/Notes:</div>
                <div className="form-value">
                  <input type="textbox4" id="challenge_input_notes" />
                </div>
              </div>
            </form>
            <button id="challenge_input_submit">Issue Your Challenge!</button>
          </div>
        </div>
        <div className='twenty-five-percent-wide'>&nbsp;</div>
      </div>
    )
  };
};

export default withRouter(CHALLENGE_FORM);