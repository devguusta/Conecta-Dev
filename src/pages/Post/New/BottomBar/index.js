import React from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles((theme) => ({
    root: {},
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center',
    }
}))

function BottomBar() {
    const classes = useStyles();
   /* const ctx = usePost() 

    const handleSaveDraft = () => {
        // acessar backend e salvar o rascunho
    };

    const handlePublish = () => {
        // acessar o backend e pubicar este post 
    } */

    <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
            <Button className={classes.button}>Salvar rascunho</Button>
            <Button color="secondary" variant="outlined">Publicar</Button>
        </Toolbar>

    </AppBar>
}

export default BottomBar;