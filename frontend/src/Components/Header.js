import React from "react";
import './Header.css'
import Grid from '@mui/material/Grid';
import logo from '../images/logo.png';
import Avatar from '@mui/material/Avatar';

function Header(){

    return(
        <div>
                <div className='Header_Content'>
                    <Grid container>
                        <Grid xs={2}>
                            <img className='Header_logo' src = {logo} width="50px"/>
                        </Grid>
                        <Grid xs={3}>
                            <div className="Header_nav">
                            <a href="/location">location</a>
                            <a href="/boat">boat</a>
                            </div>
                        </Grid>
                        <Grid xs={6}>
                            <input className='Header_search' text="text" placeholder='Search'/>
                        </Grid>
                        <Grid xs={1}>
                            <Avatar className='Header_profilepic'/>
                        </Grid>
                    </Grid>
                </div>
            </div> 
    )
}

export default Header;