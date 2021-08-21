import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import MainContent from '../MainContent/MainContent';
import Navbar from '../Navbar/Navbar';
import './ProfileDetails.css';
class ProfileDetails extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div>
            <div className="navbar_content">
            <Grid container>
                <Grid item xs = "2">
                    <img className="img_d" height="55cm" src="Group 20.png"/>
                </Grid>
                
                <Grid item xs = "4">
                   <div class="sear"> <input class="search" type="text" placeholder="Search"/></div>
                </Grid>
                
                <Grid item xs = "6">
                    <div class="img_headinda"><img src="./home.png"/>
                     <img src="./dm.png"/>
                     <img src="./like icon.png"/>
                     <img src="./upload.png"/>
                     <img src="./profile icon.png"/></div>
                     </Grid>
                
                </Grid>
                </div>
         </div>
        );
    }
}
export default ProfileDetails