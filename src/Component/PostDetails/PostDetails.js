import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Grid, Paper, ButtonBase, Typography, Button } from '@material-ui/core';
import Comment from '../Comment/Comment';
import "./PostDetails.css"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
      },
      title: {
        lineHeight:1,
        color: "blue",
        marginTop:15,
        fontSize:25,
        fontWeight: 'bold',
        textTransform: 'uppercase'
      },
      button: {
          float: 'right',
      }
  }));

const PostDetails = ({img}) => {
    const {postId} =useParams()
    const [postDetails, setPostDetails]=useState([])
    const {title,body}=postDetails
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(data =>setPostDetails(data))
    },[])
    const [comment, setComment]=useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then(data =>setComment(data))
    },[])
    const [postPhoto,setPostPhoto]=useState([])
    useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/photos/${postId}`)
    .then(response => response.json())
    .then(data =>setPostPhoto(data))
    },[])

const classes = useStyles();
    return (
        <Container>
            <Link to="/home" className={classes.button}><Button variant="contained" color="primary">Go To Home</Button></Link>
            <h3>Post Details</h3>
            
            <Grid item md={12}>
            <Paper container className={classes.paper}>
                <Grid container spacing={1}>
                <Grid item >
                    <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="PostImage" src={postPhoto.thumbnailUrl} />
                    </ButtonBase>
                </Grid>
                    <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography className={classes.title} gutterBottom variant="subtitle1">
                        {title}
                        </Typography>
                        <Typography  gutterBottom variant="subtitle1">
                        {body}
                        </Typography>
                    </Grid>
                    </Grid> 
                </Grid>
            </Paper>
            </Grid> 
            <h4>Post Comments</h4>
           <Grid container spacing={2}>

                {
                    comment.map(cm=><Comment comment={cm}></Comment>)
                }
           </Grid>
    </Container>
    );
};

export default PostDetails;