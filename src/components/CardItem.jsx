import React from 'react';
import Grid from '@material-ui/core/Grid';

const CardItem = ({data})=>{
    return(
        <div className="cardItem" style={{backgroundColor:'white',textAlign:'center',margin:'0 -15px'}}>
          <h1>{data.node.header}</h1>
          <img style={{mixBlendMode: 'multiply'}} src={data.node.icon.file.url} alt="Displays something relevant "></img>
          <p>{data.node.description.description}</p>
        </div>
    )
}

export default CardItem;