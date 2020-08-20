import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

const Hero = () =>{
  const data = useStaticQuery(graphql`
    query Hero {
      allContentfulHero {
        nodes {
          header
          subheader
          url
        }
      }
    }
  `);

  let style = {};
  style.button = {
    backgroundColor: '#808080',
    border: 'none',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius:'15%'
  };
  style.header = {
    wordSpacing: '10px',
    fontSize: '4em'
  };
  ////padding order:top, right, bottom, and left
  let header = data.allContentfulHero.nodes[0].header;
  let subHeader = data.allContentfulHero.nodes[0].subheader;
  let link = data.allContentfulHero.nodes[0].url;
  return(
    <div style={{padding: '15%',backgroundColor:'#A9A9A9'}}>
      <div className="Hero-Holder" style={{textAlign:'center',color:'white',fontSize:'1em'}}>
        <h1 style={style.header}>{header}</h1>
        <h3 style={{wordWrap: 'normal',fontSize:'1em'}}>{subHeader}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer"><button style={style.button}>Over To You</button></a>
      </div>
    </div>
  )
};

export default Hero
