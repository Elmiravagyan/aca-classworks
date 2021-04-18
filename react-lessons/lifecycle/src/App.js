import React from 'react';
import './App.css';
import { Login } from './components/Login/login';
import { Posts } from './components/Posts/posts';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    handleLogin = () => {
       this.setState({ isLoggedIn: !this.state.isLoggedIn })
    }

    render() {
        const { isLoggedIn } = this.state;
        return (
            <div className="App">
                <Login isLoggedIn={isLoggedIn} handleLogin={this.handleLogin}/>
                <Posts />
            </div>
        );
    }
}

export default App;
