import React from 'react';
import {Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Bell} from 'react-feather';
import Avatar from '@material-ui/core/Avatar';

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
    const classes = useStyles();
    

    return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}> 
    <Toolbar>
        <img src="/images/logo.png" alt="Logo" className={classes.img}/>
         <div className={classes.grow}></div>
        <div className={classes.userSection}>     
        <Button variant="contained" color="primary" className={classes.button}>Novo Post</Button>
        <SvgIcon className={classes.bell}>
            <Bell/>
        </SvgIcon>
        <Avatar alt="Remy Sharp" src="/"/>
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