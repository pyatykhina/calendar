import React, { Component } from 'react'; 
import './Chat.css';

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
        );
    }
}

export default Chat;
