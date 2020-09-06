import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, ButtonBase, Button} from '@material-ui/core';
import "./Post.css"
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  title: {
    color:"#157889",
    lineHeight:1,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  btn: {
    marginTop:"-30px"
  }
}));


const Post = ({post}) => {
        const classes = useStyles();
        const {title}=post

const [postPhoto,setPostPhoto]=useState([])
useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/photos/${post.id}`)
  .then(response => response.json())
  .then(data =>setPostPhoto(data))
},[])
    return (
      
        <Grid item sm={12} xs={12} md={6} lg={4}>
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
                    
                  </Grid>
                  <Grid item>
                  <Link img={postPhoto.thumbnailUrl} to={`/post/${post.id}`}><Button variant="contained" size="small" color="primary" className={classes.margin}> Read More</Button></Link>
                  </Grid>
                </Grid>
                
            </Grid>
          </Paper>
        </Grid>
     
    );
};

export default Post;