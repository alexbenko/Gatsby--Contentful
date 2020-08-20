import PropTypes from "prop-types"
import React from "react"
import NavItem from './NavItem.jsx';
//import Img from "gatsby-image"

//padding order:top, right, bottom, and left
//object destructuring
const Header = ({ siteTitle,icon,navItems }) => (
  <header style={{background: `white`}}>
    <div style={{display:`flex`,flexDirection:`row`}}>
        <img style={{maxWidth:'5%',height:'auto'}} src={icon} alt="Little Pic that spruces up the Navigation Bar" style={{paddingLeft:'10%',paddingRight:'20%'}}></img>
        <div className="nav-items-holder" style={{display:`flex`,flexDirection:`row`,padding:'3.5% 10% 0% 20%'}}>
          {navItems.map((item,i)=>{
            return(
              <NavItem item={item} key={i}/>
            )
          })}
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
