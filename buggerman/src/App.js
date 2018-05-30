import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// import LoginPage from './components/login/LoginPage'
// import SignupPage from './components/signup/SignupPage'
// import GamesList from './components/games/GamesList'
// import GameDetails from './components/games/GameDetails'
// import LogoutPage from './components/logout/LogoutPage'
import Board from './components/Board'
import './App.css'
import TopBar from './components/layout/TopBar'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Board} />
                </div>
            </Router>
        );
    }
}

export default App;
