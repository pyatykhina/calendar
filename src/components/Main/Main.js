import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import './Main.scss';

import mainIcon from '../../images/main.svg';
import diaryIcon from '../../images/diary.svg';
import chatIcon from '../../images/chat.svg';
import logoutIcon from '../../images/logout.svg';

class Main extends Component {
    state = {
        username: ''
    };

    saveData = (key, data) => {
        window.localStorage.setItem(key, JSON.stringify(data));
    }

    loadData(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    logout() {
        window.localStorage.removeItem('userID');
        window.localStorage.removeItem('username');
    }
    
    componentDidMount() {
        if (new URLSearchParams(this.props.location.search).get('userID')) {
            this.saveData('userID', new URLSearchParams(this.props.location.search).get('userID'));
        } 
        if (new URLSearchParams(this.props.location.search).get('username')) {
            this.saveData('username', new URLSearchParams(this.props.location.search).get('username'));
        }
        this.setState({ username: this.loadData('username') });
    }

    render() {
        return (
            <div className='wrapper'> 
                <div className='content'>
                    <header className='header'>
                        <h1 className='header__logo'>Calendar</h1>

                        <nav className='nav'>
                            <div className='header__user'>{this.state.username}</div>
                            <form action='/api/logout'>
                                <button
                                    className='nav__item-logout' 
                                    formMethod='post'
                                    type='submit'
                                    onClick={(e) => this.logout(e)}
                                ><img src={logoutIcon} alt='logout' className='nav__item' />
                                </button>
                            </form>
                            <Link to='/main'><img src={mainIcon} alt='main' className='nav__item' /></Link>
                            <Link to='/diary'><img src={diaryIcon} alt='diary' className='nav__item' /></Link>
                            <Link to='/chat'><img src={chatIcon} alt='chat' className='nav__item' /></Link>
                        </nav>
                    </header>    
                    <div>Main</div>
                </div>
            </div>
        );
    }
}

export default Main;