import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {withStyles, createStyleSheet} from 'material-ui/styles';

const styleSheet = createStyleSheet('Header', {
    root: {
        marginTop: 30,
        width: '100%',
    },
    flex: {
        flex: 1,
    },
});

class Header extends Component {

    static propTypes = {
        classes: React.PropTypes.object.isRequired
    };

    render() {
        return (<AppBar>
            <Toolbar>
                <Typography type="title" color="inherit" className={this.props.classes.flex}>
                    Curriculum vitae
                </Typography>

                <Button href="#abouts" color="contrast">Abouts</Button>
                <Button href="#skills" color="contrast">Skills</Button>
                <Button href="#interests" color="contrast">Interests</Button>
                <Button href="#contacts" color="contrast">Contacts</Button>
            </Toolbar>
        </AppBar>);
    }
}

export default withStyles(styleSheet)(Header);
