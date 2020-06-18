import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({       
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        whiteSpace: 'nowrap',
        color: theme.palette.text.secondary, 
        margin: 10,       
    },
      
}));

function Carteira() {
    const classes = useStyles();

    return (   
        <>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item>
                            Teste
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}

export default Carteira;