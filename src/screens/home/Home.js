import React, { Component } from 'react';
import Header from '../../common/header/Header.js';
import './Home.css';
import moviesData from '../../common/moviesData.js'
import { GridList } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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
              
              <div className="right">
                  {/*to be added*/}
              </div>
            </div>   
        </div>
      );
    }
  }

export default Home;