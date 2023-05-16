import { Grid } from "@mui/material";
import { Button } from "bootstrap";
import React from "react";

export default function Homepage(){
    return(
        <div className = "Homepage_container">
            <Grid container>
                <Grid xs={2}></Grid>
                <Grid xs={8}>
                    <div className="Homepage_navigation">
                        <Button>Location Management</Button>
                    </div>
                </Grid>
                <Grid xs={2}></Grid>               
            </Grid>            
        </div>
    )
}

