import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import './Footer.css';

class Footer extends React.Component {
    render(){
        return(
            <footer className="footer">
                <h2>Talk2World</h2>
                <p>Contact us at</p>
                <p>techybrain@gmail.com</p>
            </footer>
        );
    }
}

export default Footer;