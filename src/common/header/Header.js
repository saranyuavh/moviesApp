import React,{Component} from 'react';
import './Header.css' ;
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
const customStyles = {
    content: {
        top :'50%',
        left: '50%',
        right: 'auto',
        bottom : 'auto',
        marginRight : '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value:0
        }
    }

    openModalHandler = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModalHandler = () => {
        this.setState({ modalIsOpen: false });
    }

    tabChangeHandler = (event, value) => {
        this.setState({ value });
    }

    const TabContainer = function() {
        return(
            <Typography component="div" style={{padding:0}}></Typography>
        );
    }
    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="Movies App Logo" />
                    <div className="login-button">
                <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                    </div>
                </header>
                <Modal
                    ariaHideApp={false}
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Login"
                    onRequestClose={this.closeModalHandler}
                    style={customStyles}
                >
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    <TabContainer>

                    </TabContainer>
                </Modal>
            </div>
        )
    }
}

export  default Header;