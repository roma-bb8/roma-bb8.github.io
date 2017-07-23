import React, {Component} from 'react';

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

import Header from './Components/Header';
import AboutStep from './Components/Steps/AboutStep';
import SkillsStep from './Components/Steps/SkillsStep';
import InterestsStep from './Components/Steps/InterestsStep';
import ContactStep from './Components/Steps/ContactStep';
import Footer from './Components/Footer';


export default class Application extends Component {

    render() {
        return (<MuiThemeProvider>
            <div>
                <Header/>
                <main>
                    <AboutStep/>
                    <SkillsStep/>
                    <InterestsStep/>
                    <ContactStep/>
                </main>
                <Footer/>
            </div>
        </MuiThemeProvider>);
    }
}
