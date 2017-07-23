import React, {Component} from 'react';
import Card, {CardContent} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Divider from 'material-ui/Divider';


const styleSheet = createStyleSheet('ImageAvatars', {
    avatar: {
        margin: '0 auto',
    },
    bigAvatar: {
        width: 256,
        height: 256,
    },
});

class AboutCard extends Component {

    static propTypes = {
        classes: React.PropTypes.object.isRequired,
    };

    render() {
        return (<Card elevation={4}>
            <CardContent>

                <Grid container gutter={24}>

                    <Grid item xs={12} sm={12} md={4}>

                        <Avatar
                            alt="Adelle Charles"
                            src="/assets/images/Копия JUD5Or4vBmc.jpg"
                            className={classNames(this.props.classes.avatar, this.props.classes.bigAvatar)}
                        />

                    </Grid>

                    <Grid item xs={12} sm={12} md={8}>

                        <Typography type="headline">Hello. I'm Roma Baranenko</Typography>
                        <Typography type="caption">Developer</Typography>
                        <Divider light className="d"/>

                        <Grid container gutter={8} direction="column">

                            <Grid item xs>

                                <Grid container gutter={8}>

                                    <Grid item>
                                        <Typography type="body2">Age</Typography>
                                    </Grid>

                                    <Grid item>
                                        <Typography type="title">22</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs>

                                <Grid container gutter={8}>

                                    <Grid item>
                                        <Typography type="body2">Address</Typography>
                                    </Grid>

                                    <Grid item>
                                        <Typography type="title">Ukraine, Dnipropetrovska Oblast', Dnipro</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs>

                                <Grid container gutter={8}>

                                    <Grid item>
                                        <Typography type="body2">Email</Typography>
                                    </Grid>

                                    <Grid item>
                                        <Typography type="title">sommelier.jungle@gmail.com</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs>

                                <Grid container gutter={8}>

                                    <Grid item>
                                        <Typography type="body2">Phone</Typography>
                                    </Grid>

                                    <Grid item>
                                        <Typography type="title">+38 (068) 445 14 94</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>);
    }
}

export default withStyles(styleSheet)(AboutCard);
