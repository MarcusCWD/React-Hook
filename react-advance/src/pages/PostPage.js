import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import axios from 'axios'

export default function PostPage(props){
    const [activePost, setActivePost] = useState({})
    const [activePostId, setActivePostId] = useState(0)
    useEffect(()=>{
        const fetchPost = async (postId) => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts' + postId)
            setActivePost(response.data)
        }
        fetchPost(activePostId)
    },
    [activePostId]
    )

    return(
        console.log('hey')
    )
}