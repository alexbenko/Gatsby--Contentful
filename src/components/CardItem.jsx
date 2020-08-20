import React from 'react';
import './card.css'

const CardItem = ({data})=>{
    return(
        <div className="cardItem" style={{backgroundColor:'white',textAlign:'center',width:'33%',margin:'1%'}}>
          {console.log(data.node)}
          <img style={{height:'25%'}} src={data.node.icon.file.url} alt="Displays something relevant "></img>
          <h1 style={{textDecoration:'none'}}>{data.node.header}</h1>
          <p>{data.node.description.description}</p>
        </div>
    )
}

export default CardItem;