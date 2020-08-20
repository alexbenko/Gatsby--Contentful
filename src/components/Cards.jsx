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
      <div className="card-section" style={{display:'flex',flexDirection:'row',marginTop:'-1%',position: 'absolute',zIndex:'9',justifyContent:'space-evenly',paddingRight:'10%',paddingTop:'8%'}}>
          {data.allContentfulCard.edges.map((card,i)=>{
              return(
              <CardItem data={card} key={i}/>
            )
          })}
      </div>
    );
}



export default Cards