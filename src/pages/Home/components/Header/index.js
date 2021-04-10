import React from 'react';
import {Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Bell} from 'react-feather';

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
    button: {
        marginRight: 10
    },
    bell: {
        marginRight: 10
    }

})


function Header ( ) {
    const classes = useStyles()
    
    
    

   
    

    return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}> 
    <Toolbar>
        <img src="/images/logo.png" alt="Logo" className={classes.img}/>
         <div className={classes.grow}/>
        <div className={classes.userSection}>     
        <Button variant="contained" color="primary" className={classes.button}>Novo Post</Button>
        <SvgIcon className={classes.bell}>
            <Bell/>
        </SvgIcon>
        <Account/>
        
        </div>

        {/*<div className="">
           <a href>Conecta Dev</a>
        </div>

        <div className="">
        <Button variant="contained" color="primary">Novo Post</Button>
            <span>Imagem1</span>
            <span>Imagem2</span>     
    </div>*/}


    </Toolbar>
</AppBar>
)

}

export default Header;