import React, {Component} from 'react';
import Typography from 'material-ui/Typography';

import InterestsCard from '../InterestsCard';


export default class InterestsStep extends Component {

    render() {
        return (<div id="interests">
            <Typography type="display1" align="center" className="x">
                My Interests
            </Typography>

            <InterestsCard/>

        </div>);
    }
}
