import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LOGIN_PAGE from './login_page.jsx';
import CHALLENGE_FORM  from './challenge_form.jsx';
import CREATE_ACCOUNT_PAGE from './create_account_page.jsx';
import CHALLENGE_INDEX from './challenge_index.jsx';
import _404 from './_404.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact={true} path='/' component={CHALLENGE_FORM} />
        <Route exact={true} path='/404.html' component={_404} />
        <Route exact={true} path='/login.html' component={LOGIN_PAGE} />
        <Route exact={true} path='/create_account.html' component={CREATE_ACCOUNT_PAGE} />
        <Route exact={true} path='/challenges.html' component={CHALLENGE_INDEX} />
      </div>
    </Router>
  );
}

export default App;
