import React, { Component } from 'react'; 
import './Login.scss';

class Login extends Component {
    state = {
        mode: 'authorization',
        name: '',
        email: '',
        password: ''
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

    render() {
        return (
            this.state.mode === 'authorization'
                ? ( 
                    <div className='login'>
                        <div className='login__form'>
                            <div className='login__form-title'>
                                <button className='login__form-title-item login__form-title-item-active' onClick={this.toggleModeAuth}>Authorization</button>
                                <div className='login__form-title-slash'>/</div>
                                <button className='login__form-title-item' onClick={this.toggleModeReg}>Registration</button>
                            </div>
                            <div className='login__form-main login__form-authorization'>
                                <input 
                                    type='text' 
                                    className='login__form-item' 
                                    value={this.state.email} 
                                    onChange={this.changeEmail} 
                                    placeholder='Email' 
                                />
                                <input 
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
                            </div>
                        </div>
                    </div>
                ) : ( 
                    <div className='login'>
                        <div className='login__form'>
                            <div className='login__form-title'>
                                <button className='login__form-title-item' onClick={this.toggleModeAuth}>Authorization</button>
                                <div className='login__form-title-slash'>/</div>
                                <button className='login__form-title-item login__form-title-item-active' onClick={this.toggleModeReg}>Registration</button>
                            </div>
                            <div className='login__form-main login__form-registration'>
                                <input 
                                    type='text' 
                                    className='login__form-item' 
                                    value={this.state.name} 
                                    onChange={this.changeName} 
                                    placeholder='Name' 
                                />
                                <input 
                                    type='text' 
                                    className='login__form-item' 
                                    value={this.state.email} 
                                    onChange={this.changeEmail} 
                                    placeholder='Email' 
                                />
                                <input 
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
                            </div>
                        </div>
                    </div> 
                )
        );
    }
}

export default Login;