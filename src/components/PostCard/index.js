import React from 'react';
import {makeStyles} from '@material-ui/core/styles'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';

const  useStyles = makeStyles((theme) => ({
    root: {
        marginBottom : theme.spacing(2),

    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
        
    },
    caption: {
        marginRight: theme.spacing(1)
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 24'
    },
    image: {
        height: 300,
        width: '100%'
    },
    content: {
        padding: 0
    },
    favorite: {
        marginLeft: 'auto'
    }

}))


function PostCard({post }) {

    const classes = useStyles();
    return(
        <Card className={classes.root}>
        <CardHeader 
        avatar={<Avatar src={post.author.avatar} />}
        title={<Typography variant="h6">{post.title}</Typography> }
        subheader= {
            <div className={classes.subheader}>
            <Typography  className={classes.caption}variant="caption">
            {'Avaliado por'}
            </Typography>
            <Typography variant="subtitle2" className={classes.caption}>
            {post.author.name}
            </Typography>
            <Typography variant="caption" className={classes.caption}>
            {post.date}
            </Typography>
              </div>    
        }
     />

        {/* EFEITO QUE NÃO ESTOU GOSTANDO É NESSE CLASSES.CONTENT*/}
        
        <CardContent className={classes.content}>
        <Typography  
         className={classes.message}
         variant="body1">
            {post.hastags}
            </Typography>
            <CardActionArea>
                <img src={post.image} className={classes.image} alt="Para cego ver" />

            </CardActionArea>

        </CardContent>

        <CardActions disableSpacing>
        <IconButton arial-label="like">
            <FavoriteIcon />
            <Typography
            style={{cursor: 'pointer'}}
            color="textSecondary"
            variant="body2"
            >
            {'10'}
            </Typography>
            
            </IconButton>

                <IconButton arial-label="comment">
                <MessageIcon />
                <Typography
                    className={classes.reactions}
                    color="textSecondary"
                    variant="body2">
                    {'35'}
                    </Typography>
               </IconButton>

                <IconButton>

                <BookmarkIcon/>
               <Typography
                    className={classes.favorite}
                    color="textSecondary"
                    variant="body2">
                    
                    </Typography>
               </IconButton>
            


        </CardActions>
        </Card>
     
    )

}

export default PostCard;