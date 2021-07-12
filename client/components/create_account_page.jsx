import React from 'react';
import { withRouter } from 'react-router-dom';

class CREATE_ACCOUNT_PAGE extends React.Component {
  componentDidMount() {
    document.getElementById('create-account-continue').addEventListener('click', this.continueClicked.bind(this));
    document.getElementById('create-account-sign-in').addEventListener('click', this.signInClicked.bind(this));
  };

  continueClicked() {
    this.props.history.push('404.html');
  };

  signInClicked() {
    this.props.history.push('login_page.html');
  }

  render () {
    return (
      <div className='column-container'>
        <div className='twenty-five-percent-wide'>&nbsp;</div>
        <div className='fifty-percent-wide'>
          <img src='./imgs/logo.png' height='53' width='400' alt='' />
          <div className='column-container'>
            <div className='login-box'>
              <h1>Create an Account</h1>
              <strong>Your name</strong><br />
              <input type='text' id='create-account-name' className='full-width' /><br /><br />
              <strong>Email</strong><br />
              <input type='text' id='create-account-email' className='full-width' /><br /><br />
              <strong>Password</strong><br />
              <input type='text' id='create-account-password' className='full-width' /><br /><br />
              <strong>Repeat Password</strong><br />
              <input type='text' id='create-account-password-take2' className='full-width' /><br /><br />
              <button id='create-account-continue'>Continue</button>
            </div>
          </div>
          Already have an account here?<br />
          <button id='create-account-sign-in'>Sign in to your account</button>
        </div>
        <div className='twenty-five-percent-wide'>&nbsp;</div>
      </div>
    )
  }
};

export default withRouter(CREATE_ACCOUNT_PAGE);