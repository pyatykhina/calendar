import React, { Component } from 'react'; 
import { Redirect } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
    state = {
        mode: 'authorization',
        name: '',
        email: '',
        password: '',
        isAuthorized: ''
    };

    toggleModeAuth = () => {
        this.setState(state => ({
            mode: state.mode = 'authorization'
        }));
    }

    toggleModeReg = () => {
        this.setState(state => ({
            mode: state.mode = 'registration'
        }));
    }

    changeName = e => {
        this.setState({
            name: e.target.value
        });
    };

    changeEmail = e => {
        this.setState({
            email: e.target.value
        });
    };

    changePassword = e => {
        this.setState({
            password: e.target.value
        });
    };

    loadData(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    componentDidMount() {
        if (this.loadData('userID')) {
            fetch('/api/isAuthorized', { method: 'POST' })
                .then( response => {
                    if (response.status === 200) {
                        this.setState({ isAuthorized: true });
                    } else {
                        this.setState({ isAuthorized: false });
                    }
                })
                .catch(e => console.log(e));
        }
    }

    renderForm() {
        return (
            this.state.mode === 'authorization'
                ? ( 
                    <div className='wrapper'> 
                        <div className='content'>
                            <header className='header'>
                                <h1 className='header__logo'>Calendar</h1>
                            </header>
                            <div className='login'>
                                <div className='login__form'>
                                    <div className='login__form-title'>
                                        <button className='login__form-title-item login__form-title-item-active' onClick={this.toggleModeAuth}>Authorization</button>
                                        <div className='login__form-title-slash'>/</div>
                                        <button className='login__form-title-item' onClick={this.toggleModeReg}>Registration</button>
                                    </div>
                                    <div className='login__msg'>{new URLSearchParams(this.props.location.search).get('msg')}</div>
                                    <form action='/api/auth' method="POST" className='login__form-main login__form-authorization'>
                                        <input 
                                            name='email'
                                            type='text' 
                                            className='login__form-item' 
                                            value={this.state.email} 
                                            onChange={this.changeEmail} 
                                            placeholder='Email' 
                                        />
                                        <input 
                                            name='password'
                                            type='password' 
                                            className='login__form-item' 
                                            value={this.state.password} 
                                            onChange={this.changePassword} 
                                            placeholder='Password' 
                                        />
                                        <input 
                                            type='submit' 
                                            className='login__form-button' 
                                            value='Log in' 
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ( 
                    <div className='wrapper'> 
                        <div className='content'>
                            <header className='header'>
                                <h1 className='header__logo'>Calendar</h1>
                            </header>
                            <div className='login'>
                                <div className='login__form'>
                                    <div className='login__form-title'>
                                        <button className='login__form-title-item' onClick={this.toggleModeAuth}>Authorization</button>
                                        <div className='login__form-title-slash'>/</div>
                                        <button className='login__form-title-item login__form-title-item-active' onClick={this.toggleModeReg}>Registration</button>
                                    </div>
                                    <div className='login__msg'>{new URLSearchParams(this.props.location.search).get('msg')}</div>
                                    <form action='/api/reg' method="POST" className='login__form-main login__form-registration'>
                                        <input 
                                            name='name'
                                            type='text' 
                                            className='login__form-item' 
                                            value={this.state.name} 
                                            onChange={this.changeName} 
                                            placeholder='Name' 
                                        />
                                        <input 
                                            name='email'
                                            type='text' 
                                            className='login__form-item' 
                                            value={this.state.email} 
                                            onChange={this.changeEmail} 
                                            placeholder='Email' 
                                        />
                                        <input 
                                            name='password'
                                            type='password' 
                                            className='login__form-item' 
                                            value={this.state.password} 
                                            onChange={this.changePassword} 
                                            placeholder='Password' 
                                        />
                                        <input 
                                            type='submit' 
                                            className='login__form-button' 
                                            value='Register' 
                                        />
                                    </form>
                                </div>
                            </div> 
                        </div>
                    </div>
                )
        );
    }

    render() {
        const { isAuthorized } = this.state;
        
        return (
            isAuthorized 
                ? (
                    <Redirect to='/main' />
                ) : (
                    <div>{this.renderForm()}</div>
                )
        )
    }
}

export default Login;