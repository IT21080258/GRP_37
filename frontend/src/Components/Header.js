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
                            <div className="Header_home">
                                <a href="/home">Home</a>
                            </div>
                        </Grid>
                        <Grid xs={4}>
                            <div className="Header_nav">
                                <a href="/location">location</a>
                                <a href="/boat">boat</a>
                                <a href="/animal">animal</a>
                            {/* <a href="/home">Home</a> */}
                            </div>
                        </Grid>
                        <Grid xs={5}>
                            <img className='Header_logo' src = {logo} width="50px"/>
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