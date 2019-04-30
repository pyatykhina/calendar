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

    removeMember = (projectID, memberID) => {
        fetch('/api/removeMember', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: 
                JSON.stringify({
                    projectID: projectID,
                    memberID: memberID
                })
        })
            .then( response => {
                return response.status === 200 && this.fetchProjects();
            })
    }

    fetchProjects = () => {
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

    componentDidMount() {
        if (new URLSearchParams(this.props.location.search).get('userID')) {
            this.saveData('userID', new URLSearchParams(this.props.location.search).get('userID'));
        } 
        if (new URLSearchParams(this.props.location.search).get('username')) {
            this.saveData('username', new URLSearchParams(this.props.location.search).get('username'));
        }
        this.setState({ username: this.loadData('username') });

        if (new URLSearchParams(this.props.location.search).get('modal-msg')) {
            this.setState({ isShowModal: true });
        }

        this.fetchProjects();
    }

    render() {
        return (
            <div id='wrapper'> 
                <header className='header'>
                    <h1 className='header__logo'><Link to='/main' className='header__logo-link'>Calendar</Link></h1>

                    <button 
                        className='header__add-button'
                        onClick={() => this.setState({ isShowModal: true })}
                    >Create a new project</button>

                    <nav className='nav'>
                        <div className='header__user'>{this.state.username}</div>
                        <form action='/api/logout' method='POST'>
                            <button
                                className='nav__item-logout' 
                                type='submit'
                                onClick={this.logout}
                            ><img src={logoutIcon} alt='logout' className='nav__item' /></button>
                        </form>
                        <Link to='/main'><img src={mainIcon} alt='main' className='nav__item' /></Link>
                        <Link to='/diary'><img src={diaryIcon} alt='diary' className='nav__item' /></Link>
                        <Link to='/chat'><img src={chatIcon} alt='chat' className='nav__item' /></Link>
                    </nav>
                </header>    
                
                <div className='main'>
                    <ul className='main__projects'>
                        {this.state.projects.map(project => (
                            <li className='main__projects-item'>
                                <header className='main__projects-header' style={{ backgroundColor: project.color }}>
                                    <h2 className='main__projects-header-name'>{project.name}</h2>
                                </header>
                                <div className='main__projects-main'>
                                    <p className='main__projects-description'>{project.description}</p>
                                    <h3 className='main__projects-subtitle'>Members: </h3>
                                    <ul className='main__projects-members'>
                                        {project.members.map(member => (
                                            <li className='main__projects-members-item'>
                                                <div className='main__projects-members-item-user'>
                                                    <div className='main__projects-members-item-user-name'>{member.name}</div>
                                                    <div className='main__projects-members-item-user-email'>{member.email}</div>
                                                </div>
                                                <button
                                                    className='main__projects-members-item-close'
                                                    onClick={() => this.removeMember(project._id, member._id)}
                                                >&#10006;</button>
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className='main__projects-subtitle'>Add a member: </h3>
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

                {this.state.isShowModal && this.renderModal()}
            </div>
        );
    }

    renderModal() {
        return (
            <Modal show={this.state.isShowModal}>
                <div className='mainModal'>
                    <header className='mainModal__header'>
                        <h2 className='mainModal__header-title'>Create a new project</h2>
                        <button 
                            className='mainModal__header-close'
                            onClick={() => this.setState({ isShowModal: false })}
                        >&#10006;</button>
                    </header>
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
                            onChange={(e) => this.setState({ name: e.target.value })} 
                            placeholder='Name' 
                        />
                        <textarea 
                            name='description'
                            type='text' 
                            className='mainModal__form-item mainModal__form-item-textarea' 
                            value={this.state.description} 
                            onChange={(e) => this.setState({ description: e.target.value })} 
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
        )
    }
}

export default Main;