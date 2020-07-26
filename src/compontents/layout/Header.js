import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    barPadding: {
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

// const classes = useStyles();

export const Header = () => {
    
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.barPadding}>
            <Typography className={classes.title}>
                SLP HOUSE
            </Typography>
        </AppBar>
    )
};