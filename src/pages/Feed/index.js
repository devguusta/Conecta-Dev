import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import PostCard from '../../components/PostCard';

import Container  from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import NavBar from './NavBar'

const useStyles = makeStyles((theme) => ({
       root: {
        padding: 30

   }
}

));

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Gustavo Silva',
            username: 'guusta',
            avatar: '/images/avats/avatar1.jpeg'
        },
        title: "Criando um App do zero utilizando React.JS",
        date: "April 3, 2021",
        description: "Fala pessoal! Qual o framework favorito de vocês?",
        hastags: "#dotnet, #javascript, #reactjs, #developer",
        image: "/images/posts/post9.jpeg"
    },

    {
        id: 2,
        author: {
            id: 1,
            name: 'Gustavo Silva',
            username: 'guusta',
            avatar:  '/images/avats/avatar1.jpeg'
        },
        title: "Comparativo entre Reactjs. e Vue.js - Perfomance",
        date: "April 4,2021",
        description: "Quero criar um bootcamp gratuito para passar um pouco da minha experiência! Quem topa ?",
        hastags: "#framework, #javascript, #reactjs, #vue",
        image: "/images/posts/post8.png"
    }
];


function Feed() {
    const classes = useStyles();
    return(
                    <>
        <Container maxWidth="lg">
        <Box display="flex">
        <NavBar />
        <div className={classes.root}>
       {
           posts.map(post => (
                   <PostCard key={post.id} post={post}/>
           ))
       }
         
       </div>
    </Box> 
    </Container>

       
       </>
    )
}

export default Feed;