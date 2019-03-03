import React, { Component } from 'react'; 
import './Diary.css';

import mainIcon from '../../images/main.svg';
import diaryIcon from '../../images/diary.svg';
import chatIcon from '../../images/chat.svg';
import loginIcon from '../../images/login.svg';

class Diary extends Component {
    render() {
        return (
            <div className='wrapper'> 
                <div className='content'>
                    <header className='header'>
                        <h1 className='header__logo'>Calendar</h1>
                        
                        <nav className='nav'>
                            <img src={mainIcon} alt='main' className='nav__item' />
                            <img src={diaryIcon} alt='diary' className='nav__item' />
                            <img src={chatIcon} alt='chat' className='nav__item' />
                            <img src={loginIcon} alt='login' className='nav__item' />
                        </nav>
                    </header>

                    <div className='calendar'>
                        <div className='calendar__time'>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>12 AM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>1 AM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>2 AM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>3 AM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>4 AM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>5 AM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>6 AM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>7 AM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>8 AM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>9 AM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>10 AM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>11 AM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>12 PM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>1 PM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>2 PM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>3 PM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>4 PM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>5 PM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>6 PM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>7 PM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>8 PM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>9 PM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>10 PM</span></div>
                            <div className='calendar__time-item'><span className='calendar__time-item-text'>11 PM</span></div>
                        </div>
                        <div className='calendar__grid'>
                            <div className='calendar__grid-column'>
                                <div className='calendar__grid-title'>Monday</div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                            </div>
                            <div className='calendar__grid-column'>
                                <div className='calendar__grid-title'>Tuesday</div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                            </div>
                            <div className='calendar__grid-column'>
                                <div className='calendar__grid-title'>Wednesday</div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                            </div>
                            <div className='calendar__grid-column'>
                                <div className='calendar__grid-title'>Thursday</div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                            </div>
                            <div className='calendar__grid-column'>
                                <div className='calendar__grid-title'>Friday</div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                            </div>
                            <div className='calendar__grid-column'>
                                <div className='calendar__grid-title'>Saturday</div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                            </div>
                            <div className='calendar__grid-column'>
                                <div className='calendar__grid-title'>Sunday</div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                                <div className='calendar__grid-item'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Diary;
