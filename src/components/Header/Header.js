import React from 'react'
import profile from '../../assets/profile.jpeg'

import classes from './Header.module.css'

const Header = ({ onInput }) => {
  
  const onChangeHandler = (event) => {
    event.preventDefault();

    // FETCHING THE DATA FROM THE API ON EVERY KEYSTROKE IF THE INPUT IS NOT EMPTY
    if(event.target.value) {
      fetch(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${event.target.value}&numResults=10`)
            .then(response => response.json())
            .then(result => onInput(result.results));
    } else {
        // SENDING AN EMPTY ARRAY TO THE RESULTS IF THE INPUT IS EMPTY 
        onInput([]);
    }
  }
  
  return (
    <div className={classes.header}>
        <h1 className={classes.logo}>Social Boat</h1>
        <div className={classes.search_bar}>
            <input 
                type='text' 
                className={classes.input}
                placeholder="Search here for the particular tags..."
                onChange={onChangeHandler} 
            />
        </div>
        <div className={classes.profile_pic}>
            <img src={profile} alt='profile of the user'/>
        </div>
    </div>
  )
}

export default Header;