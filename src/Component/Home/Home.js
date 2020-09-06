import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Post from '../Post/Post';
import { Container, Grid } from '@material-ui/core';
import "./Home.css"


const Home = () => {
    const [post,setPost] =useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[]);
    
    return (
       <Container >
           <div>
               <h1>All Post </h1>
           </div>
           <Grid container spacing={2}>
               {
               post.map(sp=><Post key={sp.id} post={sp}></Post>)
                }
           </Grid>   
       </Container>
           
    );
};

export default Home;