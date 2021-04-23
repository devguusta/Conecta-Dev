import React, {useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {signOut} from '../../../actions/accountActions'
import {useNavigate} from 'react-router-dom'

function Account() {

    const account = useSelector((state) => state.account)
    const [isOpen, setOpen] = useState(false)
    const ref = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate()

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
        navigate('/')
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
           >
               <MenuItem onClick={()=> navigate(`/${account.user?.username}`)}>Profile</MenuItem>
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
            
            ><MenuItem onClick={() => navigate('sign-up')}>Register</MenuItem>
             <MenuItem  onClick={() => navigate('sign-in')}>Enter</MenuItem>
            
 
            </Menu>




             }
           
        </>
    )
}

export default Account;