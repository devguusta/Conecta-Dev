import React from 'react';
import {Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box'

import  Notifications from './Notifications'
import WritePost from './WritePost'

import Account from './Account'

 

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',

    },
    img: {
        maxHeight: 55
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItens: 'center'

    },
    

})


function Header ( ) {
    const classes = useStyles()
    
    
    

   
    

    return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}> 
    <Toolbar>
        <img src="/images/logo.png" alt="Logo" className={classes.img}/>
         <div className={classes.grow}/>
        <div className={classes.userSection}>     


         <WritePost/>   
        < Notifications/>

       
        
        <Box ml={2}>
        <Account/>
        </Box>
        
        
        </div>
        </Toolbar>
        </AppBar>

       

)

}

export default Header;