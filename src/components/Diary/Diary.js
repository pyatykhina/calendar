import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import './Diary.scss';
import moment from 'moment';

import Modal from '../Modal';

import mainIcon from '../../images/main.svg';
import diaryIcon from '../../images/diary.svg';
import chatIcon from '../../images/chat.svg';
import addIcon from '../../images/add.svg';

class Diary extends Component {
    state = {
        isShowModal: false,
        title: '',
        timeStart: moment(),
        timeEnd: moment(),
        project: '',
        projects: [],
        tasks: [],
        days: [],
        numberOfWeek: ''
    }

    loadData = (key) => {
        return JSON.parse(window.localStorage.getItem(key));
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
            .then( result => { 
                this.setState({ projects: result })
                this.fetchTasks()
            });
    }

    fetchTasks = () => {
        let projectsID = [];

        this.state.projects.map(project => projectsID.push(project._id));
        fetch('/api/getTasks', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: 
                JSON.stringify({
                    projectsID: projectsID
                })
        })
            .then( response => {
                return response.status !== 200 ? Promise.reject(response) : response.json();
            })
            .then( result => this.setState({ tasks: result }) );
    }

    getDays = () => {
        let m1 = moment().add('M', -6).isoWeekday(1);

        let m2 = moment().add('M', 6).isoWeekday(7);

        while (m1 <= m2) {
            this.state.days.push( moment(m1) )
            m1 = moment(m1).add('day', 1);
        }

        this.setState({ numberOfWeek: this.state.days[182].format('W') })
    }

    slideToLeft = () => {
        this.setState({ numberOfWeek: this.state.numberOfWeek-1 })

        var gridColumns = document.getElementsByClassName('diary__grid-column');

        for (let gridColumn of gridColumns) {
            gridColumn.style.right = `calc(${gridColumn.style.right} - 100%)`;
        }
    }

    slideToRight = () => {
        this.setState({ numberOfWeek: this.state.numberOfWeek+1 })

        var gridColumns = document.getElementsByClassName('diary__grid-column');

        for (let gridColumn of gridColumns) {
            gridColumn.style.right = `calc(${gridColumn.style.right} + 100%)`;
        }
    }

    componentDidMount() {
        this.fetchProjects();
        this.getDays();
    }

    render() {
        return (
            <div id='wrapper'> 
                <header className='header'>
                    <h1 className='header__logo'>Calendar</h1>

                    <div className="header__buttons">
                        <button
                            className="header__buttons-button"
                            onClick={this.slideToLeft}
                        >&larr;</button>
                        <h2 className="header__buttons-title">
                            Week {this.state.numberOfWeek}
                        </h2>
                        <button
                            className="header__buttons-button"
                            onClick={this.slideToRight}
                        >&rarr;</button>
                    </div>
                        
                    <nav className='nav'>
                        <button 
                            className='nav__item-add'
                            onClick={() => this.setState({ isShowModal: true })}
                        ><img src={addIcon} alt='logout' className='nav__item' />
                        </button>

                        <Link to='/main'><img src={mainIcon} alt='main' className='nav__item' /></Link>
                        <Link to='/diary'><img src={diaryIcon} alt='diary' className='nav__item' /></Link>
                        <Link to='/chat'><img src={chatIcon} alt='chat' className='nav__item' /></Link>
                    </nav>
                </header>
                
                <main className='diary'>
                    <ul className='diary__time'>
                        <li className='diary__time-item'>12 AM</li>
                        <li className='diary__time-item'>1 AM</li>
                        <li className='diary__time-item'>2 AM</li>
                        <li className='diary__time-item'>3 AM</li>
                        <li className='diary__time-item'>4 AM</li>
                        <li className='diary__time-item'>5 AM</li>
                        <li className='diary__time-item'>6 AM</li>
                        <li className='diary__time-item'>7 AM</li>
                        <li className='diary__time-item'>8 AM</li>
                        <li className='diary__time-item'>9 AM</li>
                        <li className='diary__time-item'>10 AM</li>
                        <li className='diary__time-item'>11 AM</li>
                        <li className='diary__time-item'>12 PM</li>
                        <li className='diary__time-item'>1 PM</li>
                        <li className='diary__time-item'>2 PM</li>
                        <li className='diary__time-item'>3 PM</li>
                        <li className='diary__time-item'>4 PM</li>
                        <li className='diary__time-item'>5 PM</li>
                        <li className='diary__time-item'>6 PM</li>
                        <li className='diary__time-item'>7 PM</li>
                        <li className='diary__time-item'>8 PM</li>
                        <li className='diary__time-item'>9 PM</li>
                        <li className='diary__time-item'>10 PM</li>
                        <li className='diary__time-item'>11 PM</li>
                    </ul>
                    
                    <ul className='diary__grid'>
                        {this.state.days.map( day => (
                            <li className='diary__grid-column' style={{ right: '2600%' }}>
                                <h3 className='diary__grid-title'>
                                    {`${day.format('MMM')} ${day.format('DD')},    ${day.format('ddd')}`}
                                </h3>
                                <div className='diary__grid-tasks'>
                                    {this.state.tasks.map( task => (
                                        (task.timeStart.split('T')[0] === day.format('YYYY-MM-DD')) 
                                            && <div 
                                                className='diary__grid-tasks-task' 
                                                style={{ 
                                                    backgroundColor: task.project.color,
                                                    top: `${task.timeStart.split('T')[1].split(':')[0] * 51 + 
                                                            task.timeStart.split('T')[1].split(':')[1] / 60 * 51}px`,
                                                    height: `${task.timeEnd.split('T')[1].split(':')[0] * 51 - 
                                                               task.timeStart.split('T')[1].split(':')[0] * 51 + 
                                                               task.timeEnd.split('T')[1].split(':')[1] / 60 * 51 - 
                                                               task.timeStart.split('T')[1].split(':')[1] / 60 * 51}px`
                                                }}
                                            >
                                                {task.title}
                                            </div>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                
                    {this.state.isShowModal && this.renderModal()}
                </main>
            </div>
        );
    }

    renderModal() {
        return (
            <Modal show={this.state.isShowModal}>
                <div className='addModal'>
                    <header className='addModal__header'>
                        <h2 className='addModal__header-title'>Add a task</h2>
                        <button 
                            className='addModal__header-close'
                            onClick={() => this.setState({ isShowModal: false })}
                        >&#10006;</button>
                    </header>
                    <div className='addModal__msg'>{new URLSearchParams(this.props.location.search).get('modal-msg')}</div>
                    <form action='/api/addTask' method='POST' className='addModal__form'>
                        <input 
                            name='title'
                            type='text' 
                            className='addModal__form-item' 
                            value={this.state.title} 
                            onChange={(e) => this.setState({ title: e.target.value })} 
                            placeholder='Title' 
                        />
                        <div className='addModal__form-time'>
                            <input 
                                name='timeStart'
                                type='datetime-local' 
                                className='addModal__form-time-item' 
                                value={this.state.timeStart.format('YYYY-MM-DDTHH:mm')} 
                                onChange={(e) => this.setState({ timeStart: moment(e.target.value) })} 
                            />
                            <b>—</b>
                            <input 
                                name='timeEnd'
                                type='datetime-local' 
                                className='addModal__form-time-item' 
                                value={this.state.timeEnd.format('YYYY-MM-DDTHH:mm')} 
                                onChange={(e) => this.setState({ timeEnd: moment(e.target.value) })} 
                            />
                        </div>
                        <select 
                            name='project'
                            className='addModal__form-item' 
                            value={this.state.project} 
                            onChange={(e) => this.setState({ project: e.target.value })} 
                            placeholder='Project' 
                        >
                            {this.state.projects.map(project => (
                                <option value={project._id}>{project.name}</option>
                            ))}
                        </select>
                        <input 
                            type='submit' 
                            className='addModal__form-button' 
                            value='Add' 
                        />
                    </form>
                </div>
            </Modal>
        )
    }
}

export default Diary;
