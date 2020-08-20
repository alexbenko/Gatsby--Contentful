import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import CardItem from './CardItem.jsx';

const Cards = ()=>{
    const data = useStaticQuery(graphql`
    query Cards {
      allContentfulCard {
        edges {
          node {
            icon {
              file {
                url
              }
            }
            description {
              description
              }
            titles
            header
          }
        }
      }
    }
  `);


    return(
      <div className="card-section" style={{backgroundColor:'white',display:'flex',flexDirection:'row'}}>
        {console.log(data.allContentfulCard.edges)}
          {data.allContentfulCard.edges.map((card,i)=>{
              return(
              <CardItem data={card} key={i}/>
            )
          })}
      </div>
    );
}



export default Cards