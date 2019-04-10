import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import './Main.scss';

import Modal from '../Modal';

import mainIcon from '../../images/main.svg';
import diaryIcon from '../../images/diary.svg';
import chatIcon from '../../images/chat.svg';
import logoutIcon from '../../images/logout.svg';

class Main extends Component {
    state = {
        username: '',
        isShowModal: false,
        name: '',
        description: '',
        projects: []
    };

    saveData = (key, data) => {
        window.localStorage.setItem(key, JSON.stringify(data));
    }

    loadData = (key) => {
        return JSON.parse(window.localStorage.getItem(key));
    }

    logout = () => {
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

        if (new URLSearchParams(this.props.location.search).get('modal-msg')) {
            this.openModal();
        }

        fetch('/api/getProjects', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: 
                JSON.stringify({
                    userID: this.loadData('userID')
                })
        })
            .then( response => {
                return response.status !== 200 ? Promise.reject(response) : response.json();
            })
            .then( result => this.setState({ projects: result }) );
    }

    openModal = () => {
        this.setState({ isShowModal: true });
    }

    closeModal = () => {
        this.setState({ isShowModal: false });
    }

    changeName = e => {
        this.setState({
            name: e.target.value
        });
    };

    changeDescription = e => {
        this.setState({
            description: e.target.value
        });
    };

    render() {
        return (
            <div className='wrapper'> 
                <div className='content'>
                    <header className='header'>
                        <h1 className='header__logo'>Calendar</h1>

                        <div className='header__add'>
                            <button 
                                className='header__add-button'
                                onClick={this.openModal}
                            >Create a new project
                            </button>
                        </div>

                        <nav className='nav'>
                            <div className='header__user'>{this.state.username}</div>
                            <form action='/api/logout' method='POST'>
                                <button
                                    className='nav__item-logout' 
                                    type='submit'
                                    onClick={this.logout}
                                ><img src={logoutIcon} alt='logout' className='nav__item' />
                                </button>
                            </form>
                            <Link to='/main'><img src={mainIcon} alt='main' className='nav__item' /></Link>
                            <Link to='/diary'><img src={diaryIcon} alt='diary' className='nav__item' /></Link>
                            <Link to='/chat'><img src={chatIcon} alt='chat' className='nav__item' /></Link>
                        </nav>
                    </header>    
                    <div className='main'>
                        <ul className='main__projects'>
                            {this.state.projects.map(project => (
                                <li className='main__projects-item' style={{ backgroundColor: project.color }}>
                                    <div className='main__projects-name'>{project.name}</div>
                                    <div className='main__projects-description'>{project.description}</div>
                                    <div className='main__projects-main'>
                                        <div className='main__projects-subtitle'>Members: </div>
                                        <ul className='main__projects-members'>
                                            {project.members.map(member => (
                                                <li className='main__projects-members-item'>
                                                    <div className='main__projects-members-item-main'>
                                                        <div className='main__projects-members-name'>{member.name}</div>
                                                        <div className='main__projects-members-email'>{member.email}</div>
                                                    </div>
                                                    <form action='/api/removeMember' method='POST'>
                                                        <input 
                                                            name='projectID'
                                                            style={{ display: 'none' }}
                                                            value={project._id}
                                                        />
                                                        <input 
                                                            name='memberID'
                                                            style={{ display: 'none' }}
                                                            value={member._id}
                                                        />
                                                        <input
                                                            className='main__projects-members-item-close'
                                                            value='&#10006;'
                                                            type='submit'
                                                        />
                                                    </form>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className='main__projects-subtitle'>Add a member: </div>
                                        <div className='main__projects-msg'>{new URLSearchParams(this.props.location.search).get('proj-msg')}</div>
                                        <form action='/api/addMember' method='POST' className='main__projects-form'>
                                            <input 
                                                name='email'
                                                type='text' 
                                                className='main__projects-form-item' 
                                                placeholder='Email' 
                                            />
                                            <input 
                                                name='projectID'
                                                style={{ display: 'none' }}
                                                value={project._id}
                                            />
                                            <input 
                                                type='submit' 
                                                className='main__projects-form-button' 
                                                value='Add' 
                                            />
                                        </form>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {this.state.isShowModal && (
                    <Modal show={this.state.isShowModal}>
                        <div className='mainModal'>
                            <div className='mainModal__header'>
                                <div className='mainModal__header-title'>Create a new project</div>
                                <button 
                                    className='mainModal__header-close'
                                    onClick={this.closeModal}
                                >&#10006;</button>
                            </div>
                            <div className='mainModal__msg'>{new URLSearchParams(this.props.location.search).get('modal-msg')}</div>
                            <form action='/api/createProject' method='POST' className='mainModal__form'>
                                <input 
                                    name='userID'
                                    style={{ display: 'none' }}
                                    value={this.loadData('userID')}
                                />
                                <input 
                                    name='name'
                                    type='text' 
                                    className='mainModal__form-item' 
                                    value={this.state.name} 
                                    onChange={this.changeName} 
                                    placeholder='Name' 
                                />
                                <textarea 
                                    name='description'
                                    type='text' 
                                    className='mainModal__form-item mainModal__form-item-textarea' 
                                    value={this.state.description} 
                                    onChange={this.changeDescription} 
                                    placeholder='Description' 
                                />
                                <input 
                                    type='submit' 
                                    className='mainModal__form-button' 
                                    value='Create' 
                                />
                            </form>
                        </div>
                    </Modal>
                )}
            </div>
        );
    }
}

export default Main;