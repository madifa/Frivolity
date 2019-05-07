import React, { Component } from 'react';
// import {BrowserRouter as Router, route} from 'react-router-dom'
import './App.css';

import Body from './components/body/navbar';
import Signup from './components/body/signup';
import Login from './components/body/login';

class App extends Component {
	state = {
		show: 'Sign Up'
	};

	render() {
		return (
			<div>
        <Body>
          {this.state.show}
        </Body>

				<Signup />

				<Login />
			</div>
		);
	}
}

export default App;
testing