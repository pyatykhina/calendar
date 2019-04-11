import { Component } from 'react'; 
import ReactDOM from 'react-dom';
import './Modal.scss'

class MainModal extends Component {
    constructor(props) {
        super(props);
        this.id = 'modal';
        this.div = document.createElement('div');
        this.div.id = this.id;
        document.body.insertAdjacentElement(
            'beforeend',
            this.div,
        );
    }
  
    componentWillUnmount() {
        this.div.parentNode.removeChild(this.div);
    }
  
    render() {
        const { show, children } = this.props;

        return show &&
            ReactDOM.createPortal(
                children,
                document.getElementById(this.id),
            );
    }
}

export default MainModal;