
import React from 'react'

import { createUseStyles } from 'react-jss';





const containerStyles = createUseStyles({
    container: {
        width: '100%',
        display: 'flex',
        alignSelf: 'center',
        margin: 'auto'
    },
    '@media (min-width: 480px)': {
        container: {
            maxWidth: '480px !important'
        }
    },
    '@media (min-width: 576px)': {
        container: {
            maxWidth: '576px !important'
        }
    },
    '@media (min-width: 768px)': {
        container: {
            maxWidth: '768px !important'
        }
    },
    '@media (min-width: 992px)': {
        container: {
            maxWidth: '992px !important'
        }
    },
    '@media (min-width: 1200px)': {
        container: {
            maxWidth: '1200px !important'
        }
    }
});




const Container = props => {
    

    const classes = containerStyles();

    return (
        <div className={classes.container}>
            {props.children}
        </div>
    );
    
};

export default Container