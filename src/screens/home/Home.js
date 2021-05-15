import React, { Component } from 'react';
import Header from '../../common/header/Header.js';
import './Home.css';
import moviesData from '../../common/moviesData.js'
import { GridList } from '@material-ui/core';
import MultipleSelect,{MultipleSelectArtists} from './Filter.js';

import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { TextField } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={6} cellHeight={250}>
        {moviesData.map((tile) => (
          <GridListTile key={tile.poster_url}>
            <img src={tile.poster_url} alt={tile.title}/>
            <GridListTileBar
              title={tile.title}
              
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}


export function TitlebarGridList() {
  const classes = useStyles();
  const handleClick = function() {
    console.log("Redirecting to details page"); //to be redirected to details page when available 
  }
  return (
    <div className={classes.root}>
      <GridList cellHeight={350} className={classes.gridListReleasedMovies} cols={4}>
        {moviesData.map((tile) => (
          <GridListTile key={tile.poster_url}>
            <img src={tile.poster_url} alt={tile.title} className={classes.movieImg} style={{cursor:'pointer'}} onClick={() => handleClick()}/>
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Released Dates: {tile.release_date.toLocaleString()}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}



//Filter component


const useCardStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: theme.palette.primary.light ,
    // maxWidth: 240,
    // minWidth: 240,
    // margin: theme.spacing.unit,
  },
  pos: {
    marginBottom: 12,
  },
}));

export function SimpleCard() {
  const classes = useCardStyles();

  return (
    <Card className={classes.root} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          FIND MOVIES BY:
        </Typography>
        <FormControl>
          <InputLabel htmlFor="movie-input">Movie Name</InputLabel>
          <Input id="movie-input" aria-describedby="my-helper-text" />
        </FormControl>
        
        
        <div className='multipleSelect'>
        <MultipleSelect />
        </div>
        <div className='multipleSelectArtists'>
        <MultipleSelectArtists />
        </div>  
        
        <FormControl>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Release Date Start"
              type="date"
              
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </FormControl>

        <FormControl>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Release Date End"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </FormControl>
      </CardContent>
      
      <CardActions>
      <Button variant="contained" color="primary">
        APPLY
      </Button>
      </CardActions>
    </Card>
  );
}



class Home extends Component {
    render() {
      return (

        <div className="main-container">
            <Header/>
            <div className="movies-heading">
              <span>Upcoming Movies</span>
            </div>
            <div>
              <SingleLineGridList />
            </div>
            <div className="flex-container">
              
              <div className="left">
                  <TitlebarGridList />
              </div>
              
              <div className="right" style={{ maxWidth: 240, minWidth: 240}}>
                  <SimpleCard />
              </div>
            </div>   
        </div>
      );
    }
  }

export default Home;