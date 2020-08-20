import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import CardItem from './CardItem.jsx';

const Cards = ()=>{
    const data = useStaticQuery(graphql`
    query Cards {
      allContentfulCard {
        edges {
          node {
            description {
              description
            }
            icon {
              file {
                url
              }
            }
            header
          }
        }
      }
    }
  `);


    return(
      <div className="card-section" style={{display:'flex',flexDirection:'row',marginTop:'-15%',position: 'absolute',zIndex:'-9',}}>
          {data.allContentfulCard.edges.map((card,i)=>{
              return(
              <CardItem data={card} key={i}/>
            )
          })}
      </div>
    );
}



export default Cards