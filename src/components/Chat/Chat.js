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
            <div className='wrapper'> 
                <div className='content'>
                    <header className='header'>
                        <h1 className='header__logo'>Calendar</h1>
                        
                        <nav className='nav'>
                            <Link to='/main'><img src={mainIcon} alt='main' className='nav__item' /></Link>
                            <Link to='/diary'><img src={diaryIcon} alt='diary' className='nav__item' /></Link>
                            <Link to='/chat'><img src={chatIcon} alt='chat' className='nav__item' /></Link>
                        </nav>
                    </header>
                
                    <div className='chat main-content'>
                        <div className='chat__left'></div>
                        <div className='chat__right'>
                            <div className='chat__right-messages'>
                                {this.state.messages.map((message, key) => {
                                    return <span key={key} className="chat__right-messages-message">{message.text}</span>;
                                })}
                                <div
                                    ref={e => {
                                        this.messages = e;
                                    }}
                                />
                            </div>
                            <input 
                                placeholder='Enter your message'
                                className = 'chat__right-input'
                                value={this.state.messageInput} 
                                onChange={this.changeInputMessage}
                                onKeyPress={this.sendMessageOnEnter}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;
