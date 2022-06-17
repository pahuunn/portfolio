import React from 'react';
import './App.css';
import './Section.css'

import Grid from '@mui/material/Grid';
import Portfolio from './portfolio/Portfolio';
import Profile from './profile/Profile';
import Skill from './skill/Skill';
import Contact from './contact/Contact';

function App() {
    return (
        <Grid container className="Grid">
            <Grid item xs={12}>
                <Portfolio />
            </Grid>
            <Grid item xs={12}>
                <Profile />
            </Grid>
            <Grid item xs={12}>
                <Skill />
            </Grid>
            <Grid item xs={12}>
                <Contact />
            </Grid>
        </Grid>
  );
};
export default App;