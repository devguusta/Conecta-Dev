import React, {useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {signOut} from '../../../../actions/accountActions'

function Account() {

    const account = useSelector((state) => state.account)
    const [isOpen, setOpen] = useState(false)
    const ref = useRef();
    const dispatch = useDispatch();

    const isAuthenticated = !!account.user

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleSignOut = () => {
        handleClose();

        //logoff no app através de uma action no redux
        dispatch(signOut())
    }



    return (
        <>
           <Avatar 
           ref={ref}
           onClick={handleOpen}
            alt="Remy Sharp"
             src={account.user && account.user.avatar}/>
             {
                 isAuthenticated ?
                 <Menu
           anchorEl={ref.current}
           anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'center'
           }}
           open={isOpen}
           onClose={handleClose}
           getContentAnchorEl={null}
           
           ><MenuItem>Profile</MenuItem>
            <MenuItem>My favorites</MenuItem>
            <MenuItem>My posts</MenuItem>
            <MenuItem>My connections</MenuItem>
            <MenuItem onclick={ handleSignOut}>Log out</MenuItem>


           </Menu>

            : 
            <Menu
            anchorEl={ref.current}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
            open={isOpen}
            onClose={handleClose}
            getContentAnchorEl={null}
            
            ><MenuItem>Register</MenuItem>
             <MenuItem>Enter</MenuItem>
            
 
            </Menu>




             }
           
        </>
    )
}

export default Account;