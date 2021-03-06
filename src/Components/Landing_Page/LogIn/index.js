import React, { Component } from 'react'
import SignUp from '../.././SignUp/index'
import axios from 'axios'

// React Routing
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// *************

// Material UI styles
import { AppBar, TextField, Button, Grid } from '@material-ui/core'
import { FormControl, FormLabel } from '@material-ui/core'
// ******************

// Custom CSS styling
import './index.css'
import Axios from '../../../../node_modules/axios';
// ******************

function LogIn() {
        return(
            <div>
                <Grid container spacing={24} direction="column">
                    <Grid container item spacing={0} justify="center">
                        <Grid item xs={4}>
                            <AppBar margin ="auto" position="static" color="default" className="LogIn-form">
                                <iframe height="90%" src="http://18.191.158.114:8000/signin"></iframe>
                                <p>Not a member? <span><Link to="/signUp" component={SignUp}>Sign Up here</Link></span> </p> 
                            </AppBar>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
}   

export default LogIn