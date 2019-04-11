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
        }
    }

    render() {
        const { isAuthorized } = this.state;
        
        return (
            isAuthorized 
                ? (
                    <Redirect to='/main' />
                ) : (
                    this.renderForm()
                )
        )
    }

    renderForm() {
        return (
            this.state.mode === 'authorization'
                ? ( 
                    this.renderAuthorizationMode()
                ) : ( 
                    this.renderRegistrationMode()
                )
        );
    }

    renderAuthorizationMode() {
        return (
            <div id='wrapper'> 
                <header className='header'>
                    <h1 className='header__logo'>Calendar</h1>
                </header>
                <div className='login'>
                    <div className='login__form'>
                        <h2 className='login__form-title'>
                            <button 
                                className='login__form-title-item-active' 
                                onClick={() => this.setState({ mode: 'authorization' })}
                            >Authorization</button>
                            <div className='login__form-title-slash'>/</div>
                            <button 
                                className='login__form-title-item' 
                                onClick={() => this.setState({ mode: 'registration' })}
                            >Registration</button>
                        </h2>
                        <div className='login__msg'>{new URLSearchParams(this.props.location.search).get('msg')}</div>
                        <form action='/api/auth' method="POST" className='login__form-main'>
                            <input 
                                name='email'
                                type='text' 
                                className='login__form-item' 
                                placeholder='Email' 
                                value={this.state.email} 
                                onChange={(e) => this.setState({ email: e.target.value })} 
                            />
                            <input 
                                name='password'
                                type='password' 
                                className='login__form-item' 
                                placeholder='Password' 
                                value={this.state.password} 
                                onChange={(e) => this.setState({ password: e.target.value })} 
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
        )
    }

    renderRegistrationMode() {
        return (
            <div id='wrapper'> 
                <header className='header'>
                    <h1 className='header__logo'>Calendar</h1>
                </header>
                <div className='login'>
                    <div className='login__form'>
                        <h2 className='login__form-title'>
                            <button 
                                className='login__form-title-item' 
                                onClick={() => this.setState({ mode: 'authorization' })}
                            >Authorization</button>
                            <div className='login__form-title-slash'>/</div>
                            <button
                                className='login__form-title-item-active' 
                                onClick={() => this.setState({ mode: 'registration' })}
                            >Registration</button>
                        </h2>
                        <div className='login__msg'>{new URLSearchParams(this.props.location.search).get('msg')}</div>
                        <form action='/api/reg' method="POST" className='login__form-main'>
                            <input 
                                name='name'
                                type='text' 
                                className='login__form-item' 
                                placeholder='Name' 
                                value={this.state.name} 
                                onChange={(e) => this.setState({ name: e.target.value })} 
                            />
                            <input 
                                name='email'
                                type='text' 
                                className='login__form-item' 
                                placeholder='Email' 
                                value={this.state.email} 
                                onChange={(e) => this.setState({ email: e.target.value })} 
                            />
                            <input 
                                name='password'
                                type='password' 
                                className='login__form-item' 
                                placeholder='Password' 
                                value={this.state.password} 
                                onChange={(e) => this.setState({ password: e.target.value })} 
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
        )
    }
}

export default Login;