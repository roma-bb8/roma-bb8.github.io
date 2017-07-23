import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Card, {CardContent} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


export default class ContactStep extends Component {

    render() {
        return (<div id="contacts">

            <Typography type="display1" align="center" className="x">
                Contacts
            </Typography>

            <Grid container>

                <Grid item xs>

                    <Card elevation={4}>
                        <CardContent>

                            <Grid container direction="column">

                                <Grid item xs={12}>
                                    <Typography type="subheading">
                                        Feel free to contact me
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        id="name"
                                        label="Name"
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        label="email"
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="subject"
                                        label="subject"
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="message"
                                        label="message"
                                        margin="normal"
                                        fullWidth
                                        multiline
                                        rows="4"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <div
                                        className="g-recaptcha"
                                        data-sitekey="6LfJ6SQTAAAAAA5iY7ijcxi4FFplLeh37MSUlilE"
                                    />

                                </Grid>

                                <Grid item xs={12}>
                                    <Button raised color="primary">
                                        Primary
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>


                <Grid item xs>

                    <Card elevation={4}>
                        <CardContent>

                            <Grid container direction="column">

                                <Grid item xs>

                                    <Grid container gutter={8}>

                                        <Grid item>
                                            <Typography type="body2">Address</Typography>
                                        </Grid>

                                        <Grid item>
                                            <Typography type="title">Ukraine, Dnipropetrovska Oblast',
                                                Dnipro</Typography>
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

                                <Grid item xs>

                                    <Grid container gutter={8}>

                                        <Grid item>
                                            <Typography type="body2">SKYPE</Typography>
                                        </Grid>

                                        <Grid item>
                                            <Typography type="title">svat.1994</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs>

                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10590.432068347971!2d35.0228684714212!3d48.42566928760689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe353cc5d61cf%3A0xe8daf9318294a9d2!2z0L_RgNC-0YHQv9C10LrRgiDQk9Cw0LPQsNGA0ZbQvdCwLCAxMTgsINCU0L3RltC_0YDQvsyBLCDQlNC90ZbQv9GA0L7Qv9C10YLRgNC-0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1suk!2sua!4v1500828433320"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            frameborder: 0,
                                            border: 0
                                        }} allowfullscreen>
                                    </iframe>

                                </Grid>

                            </Grid>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>);
    }
}
