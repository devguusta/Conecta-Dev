import React, { useState } from 'react'
import Box from '@material-ui/core/Box'

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import Markdown from 'react-markdown';

import PostEditor from './Editor'
import PostPreview from './Preview'
import { PostProvider } from '../../../context/PostContext'
import BottomBar from './BottomBar'


function NewPost() {


    return (
        <PostProvider>
            <Box
                display="flex"
                height="calc(100%-70px)"
                overflow="scroll" >
                <Box width="50%" height="100%" padding={2} borderRight="1px solid #DDD">
                    <PostEditor />
                </Box>
                <Box width="50%" height="100%" padding={2}>
                    <PostPreview />

                </Box>
            </Box>

            <BottomBar/>


        </PostProvider>
    )
}

export default NewPost;


// image={image} title={title} tags={tags} markdownText={markdownText}/></PostProvider>