import React,{ Component } from 'react';

class NavItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      hovered: false
    }

    this.color = this.color.bind(this);
  }

  color(){
    console.log(this.props.item)
    this.setState({
      hovered: !this.state.hovered
    },()=>console.log('Changed Color'))
  }

  render(){
    let textStyle = {
      fontSize: '1.5em',
      color: this.state.hovered ? this.props.item : "black"
    };

    return(
      <div className='nav-item' style={{paddingRight:'10%'}} >
        <h1 style={textStyle} onMouseOver={()=>this.color()}>{this.props.item}</h1>
      </div>
    );
  }
}

export default NavItem;