import React from 'react'

import classes from './Card.module.css'

const Card = ({ heading, video, tags }) => {
  return (
    <div className={classes.card}>
        <video controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className={classes.card_details}>
            <h3>{heading}</h3>
            <h4>Tags:</h4>
            <p className={classes.tags}>
                {tags.map((tag, index) => <span key={tag+index}>{tag}{tags.length !== index+1 ? ", " : ""}</span>)}
            </p>
        </div>
    </div>
  )
}

export default Card;