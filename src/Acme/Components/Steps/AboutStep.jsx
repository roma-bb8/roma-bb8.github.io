import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import AboutsCard from '../AboutsCard';


export default class AboutStep extends Component {

    render() {
        return (<div id="abouts">

            <AboutsCard/>

            <Typography type="display1" align="center" className="x">
                About
            </Typography>

            <Typography type="subheading" gutterBottom align="center">
                Paper can be used to build surface or other elements for your application.
                Paper can be used to build surface or other elements for your application.
                Paper can be used to build surface or other elements for your application.
                Paper can be used to build surface or other elements for your application.
                Paper can be used to build surface or other elements for your application.
            </Typography>

        </div>);
    }
}
