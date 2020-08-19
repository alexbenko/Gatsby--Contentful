import React, { Component } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import CardItem from './CardItem.jsx';

class Cards extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="card-section" style={{zIndex:'-9'}}>

      </div>
    )
  }
}