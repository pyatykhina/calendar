import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import './Chat.scss';

import mainIcon from '../../images/main.svg';
import diaryIcon from '../../images/diary.svg';
import chatIcon from '../../images/chat.svg';

class Chat extends Component {
    state = {
        messages: [],
        messageInput: ''
    };

    componentDidUpdate() {
        if (this.messages) {
            this.messages.scrollIntoView();
        }
    }

    changeInputMessage = e => {
        this.setState({
            messageInput: e.target.value
        });
    };

    sendMessageOnEnter = e => {
        if (e.key === 'Enter' && this.state.messageInput) {
            this.setState(state => ({
                messages: [...state.messages, { text: state.messageInput }],
                messageInput: ''
            }));
        }
    };

    render() {
        return (
            <div id='wrapper'> 
                <header className='header'>
                    <h1 className='header__logo'><Link to='/main' className='header__logo-link'>Calendar</Link></h1>
                        
                    <nav className='nav'>
                        <Link to='/main'><img src={mainIcon} alt='main' className='nav__item' /></Link>
                        <Link to='/diary'><img src={diaryIcon} alt='diary' className='nav__item' /></Link>
                        <Link to='/chat'><img src={chatIcon} alt='chat' className='nav__item' /></Link>
                    </nav>
                </header>
                
                <main className='chat'>
                    <div className='chat__left'></div>
                    <div className='chat__right'>
                        <ul className='chat__right-messages'>
                            {this.state.messages.map((message, key) => {
                                return <li key={key} className="chat__right-messages-message">{message.text}</li>;
                            })}
                            <div
                                ref={e => {
                                    this.messages = e;
                                }}
                            />
                        </ul>
                        <input 
                            placeholder='Enter your message'
                            className = 'chat__right-input'
                            value={this.state.messageInput} 
                            onChange={this.changeInputMessage}
                            onKeyPress={this.sendMessageOnEnter}
                        />
                    </div>
                </main>

                <footer className='footer'>
                    <nav className='footer__nav'>
                        <Link to='/main' className='footer__nav-item'><div>Main</div></Link>
                        <Link to='/diary' className='footer__nav-item'><div>Diary</div></Link>
                        <Link to='/chat' className='footer__nav-item'><div>Chat</div></Link>
                    </nav>
                    <address className='footer__address'>
                        <a href='mailto:calendar_2019@inbox.ru' className='footer__address-mail'>Contact us</a>
                    </address>
                </footer>
            </div>
        );
    }
}

export default Chat;
