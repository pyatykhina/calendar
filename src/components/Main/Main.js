import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import './Main.scss';

import mainIcon from '../../images/main.svg';
import diaryIcon from '../../images/diary.svg';
import chatIcon from '../../images/chat.svg';

class Main extends Component {
    render() {
        return (
            <div className='wrapper'> 
                <div className='content'>
                    <header className='header'>
                        <h1 className='header__logo'>Calendar</h1>

                        <div className='main__msg'>{new URLSearchParams(this.props.location.search).get('msg')}</div>

                        <nav className='nav'>
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