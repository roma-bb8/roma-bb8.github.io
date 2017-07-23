import React, {Component} from 'react';
import Card, {CardContent} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';


export default class InterestsCard extends Component {

    render() {
        return (<Card elevation={4}>
            <CardContent>

                <Typography type="subheading" align="center">
                    Send Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum
                    est notare quam littera gothica, quam nuncl them Toruk Macto calls to them!
                    You fly now.

                    <Grid container style={{marginTop: 10}}>

                        <Grid item xs>
                            <Icon color="primary" style={{fontSize: 45}}>
                                directions_bike
                            </Icon>
                        </Grid>
                        <Grid item xs>
                            <Icon color="primary" style={{fontSize: 45}}>
                                movie
                            </Icon>
                        </Grid>
                        <Grid item xs>
                            <Icon color="primary" style={{fontSize: 45}}>
                                directions_run
                            </Icon>
                        </Grid>
                        <Grid item xs>
                            <Icon color="primary" style={{fontSize: 45}}>
                                restaurant
                            </Icon>
                        </Grid>
                    </Grid>
                </Typography>

            </CardContent>
        </Card>);
    }
}
