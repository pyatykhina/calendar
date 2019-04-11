import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import './Diary.scss';

import mainIcon from '../../images/main.svg';
import diaryIcon from '../../images/diary.svg';
import chatIcon from '../../images/chat.svg';

class Diary extends Component {
    render() {
        return (
            <div id='wrapper'> 
                <header className='header'>
                    <h1 className='header__logo'>Calendar</h1>
                        
                    <nav className='nav'>
                        <Link to='/main'><img src={mainIcon} alt='main' className='nav__item' /></Link>
                        <Link to='/diary'><img src={diaryIcon} alt='diary' className='nav__item' /></Link>
                        <Link to='/chat'><img src={chatIcon} alt='chat' className='nav__item' /></Link>
                    </nav>
                </header>
                
                <main className='diary'>
                    <ul className='diary__time'>
                        <li className='diary__time-item-text'>12 AM</li>
                        <li className='diary__time-item-text'>1 AM</li>
                        <li className='diary__time-item-text'>2 AM</li>
                        <li className='diary__time-item-text'>3 AM</li>
                        <li className='diary__time-item-text'>4 AM</li>
                        <li className='diary__time-item-text'>5 AM</li>
                        <li className='diary__time-item-text'>6 AM</li>
                        <li className='diary__time-item-text'>7 AM</li>
                        <li className='diary__time-item-text'>8 AM</li>
                        <li className='diary__time-item-text'>9 AM</li>
                        <li className='diary__time-item-text'>10 AM</li>
                        <li className='diary__time-item-text'>11 AM</li>
                        <li className='diary__time-item-text'>12 PM</li>
                        <li className='diary__time-item-text'>1 PM</li>
                        <li className='diary__time-item-text'>2 PM</li>
                        <li className='diary__time-item-text'>3 PM</li>
                        <li className='diary__time-item-text'>4 PM</li>
                        <li className='diary__time-item-text'>5 PM</li>
                        <li className='diary__time-item-text'>6 PM</li>
                        <li className='diary__time-item-text'>7 PM</li>
                        <li className='diary__time-item-text'>8 PM</li>
                        <li className='diary__time-item-text'>9 PM</li>
                        <li className='diary__time-item-text'>10 PM</li>
                        <li className='diary__time-item-text'>11 PM</li>
                    </ul>
                    <ul className='diary__grid'>
                        <li className='diary__grid-column'>
                            <div className='diary__grid-title'>Monday</div>
                            <div className='diary__grid-tasks'></div>
                        </li>
                        <li className='diary__grid-column'>
                            <div className='diary__grid-title'>Tuesday</div>
                            <div className='diary__grid-tasks'></div>
                        </li>
                        <li className='diary__grid-column'>
                            <div className='diary__grid-title'>Wednesday</div>
                            <div className='diary__grid-tasks'></div>
                        </li>
                        <li className='diary__grid-column'>
                            <div className='diary__grid-title'>Thursday</div>
                            <div className='diary__grid-tasks'></div>
                        </li>
                        <li className='diary__grid-column'>
                            <div className='diary__grid-title'>Friday</div>
                            <div className='diary__grid-tasks'></div>
                        </li>
                        <li className='diary__grid-column'>
                            <div className='diary__grid-title'>Saturday</div>
                            <div className='diary__grid-tasks'></div>
                        </li>
                        <li className='diary__grid-column'>
                            <div className='diary__grid-title'>Sunday</div>
                            <div className='diary__grid-tasks'></div>
                        </li>
                    </ul>
                </main>
            </div>
        );
    }
}

export default Diary;
