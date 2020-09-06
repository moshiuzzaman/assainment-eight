import React, { useEffect, useState } from 'react';
import { Paper, Grid, Typography, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "./Comment.css"

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
      },
      title: {
        lineHeight:1,
        color: "#210a6a",
        marginTop:15,
        color:'blue'
      },
      image: {
        width: 100,
        height: 100,
        padding:10
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius:100
      },
  }));
  

  
const Comment = ({comment}) => {
    const {email, body, id} = comment
    const [commentPhoto,setCommentPhoto]=useState([])
    useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(response => response.json())
    .then(data =>setCommentPhoto(data))
    },[])
    const img=commentPhoto.thumbnailUrl
    

    // const img=commentPhoto.picture

    const classes = useStyles();
    return (

    <Grid item md={12}>
           <Paper container className={classes.paper}>
            <Grid container spacing={1}>
              <Grid item >
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="CommentImage" src={img} />
                </ButtonBase>
              </Grid>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography className={classes.title} gutterBottom variant="subtitle1">
                        {email}
                    </Typography>
                    <Typography  gutterBottom variant="subtitle1">
                     {body}
                    </Typography>
                  </Grid>
                </Grid> 
            </Grid>
          </Paper>
        </Grid> 
    );
};

export default Comment;