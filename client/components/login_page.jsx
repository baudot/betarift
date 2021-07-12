import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

export class LOGIN_PAGE_1 extends React.Component {
  componentDidMount() {
    document.getElementById('sign-in-continue').addEventListener('click', this.continueClicked.bind(this));
    document.getElementById('sign-in-create-account').addEventListener('click', this.createAccountClicked.bind(this));
  };

  continueClicked() {
    axios.post('/api/login', {
      email: document.getElementById('sign-in-email').value,
      password: document.getElementById('sign-in-password').value
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
          <div className='column-container'>
            <div className='login-box'>
              <h1>Sign-In</h1>
              <p>
                <strong>Email</strong><br />
                <input type='text' id='sign-in-email' className='full-width' />
              </p>
              <p>
                <strong>Password</strong><br />
                <span>Warning: In development mode, passwords are sent in the clear. Do not use a password used elsewhere. It may be intercepted.</span>
                <input type='password' id='sign-in-password' className='full-width' />
              </p>
              <button id='sign-in-continue'>Continue</button>
            </div>
          </div>
          Don't have an account here?<br />
          <button id='sign-in-create-account'>Create an account</button>
        </div>
        <div className='twenty-five-percent-wide'>&nbsp;</div>
      </div>
    )
  };
};

export default withRouter(LOGIN_PAGE_1);