import React from 'react'
import Card from '../Card/Card';

import classes from './Results.module.css'

const Results = ({ data }) => {
  
    return (
        <div className={classes.results}>
            {data.length!==0 
                ? 
                data.map(item => <Card 
                                    key={item.heading} 
                                    heading={item.heading}
                                    video={item.video} 
                                    tags={item.tags}/> 
                ) 
                : 
                <h1>No Results Found</h1>
            }
        </div>
    )
}

export default Results;