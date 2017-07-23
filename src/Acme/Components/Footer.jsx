import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


export default class Footer extends Component {

    render() {
        return (<footer>

            <Typography align="center" className="x">
                <Grid container gutter={8}>
                    <Grid item xs><a target="_block" href="https://github.com/roma-bb8/" className="socicon-github"></a></Grid>
                    <Grid item xs><a target="_block" href="https://telegram.me/roma_bb8/" className="socicon-telegram"></a></Grid>
                    <Grid item xs><a target="_block" href="https://www.facebook.com/profile.php?id=100010918506537/" className="socicon-facebook"></a></Grid>
                    <Grid item xs><a target="_block" href="https://plus.google.com/u/0/102479506288499829236/" className="socicon-googleplus"></a></Grid>
                    <Grid item xs><a target="_block" href="https://www.instagram.com/romabaranenko/" className="socicon-instagram"></a></Grid>
                    <Grid item xs><a target="_block" href="https://www.linkedin.com/in/roma-baranenko-a7769312a/" className="socicon-linkedin"></a></Grid>
                    <Grid item xs><a target="_block" href="skype:svat.1994?chat" className="socicon-skype"></a></Grid>
                    <Grid item xs><a target="_block" href="https://soundcloud.com/roma-baranenko/" className="socicon-soundcloud"></a></Grid>
                    <Grid item xs><a target="_block" href="https://twitter.com/roma_bb8/" className="socicon-twitter"></a></Grid>
                    <Grid item xs><a target="_block" href="https://vk.com/roma_bb8/" className="socicon-vkontakte"></a></Grid>
                    <Grid item xs><a target="_block" href="https://www.youtube.com/channel/UC8kOsThh4SpcNoYrj8ZQiFg" className="socicon-youtube"></a></Grid>
                    <Grid item xs><a target="_block" href="https://stackoverflow.com/users/5877354/sommelier" className="socicon-stackoverflow"></a></Grid>
                    <Grid item xs><a target="_block" href="https://roma-bb8.blogspot.com/" className="socicon-blogger"></a></Grid>
                </Grid>
            </Typography>

            <Typography type="caption">
                © 2017 Roma Baranenko, power by Pages from GitHub, Inc.
            </Typography>
        </footer>);
    }
}
