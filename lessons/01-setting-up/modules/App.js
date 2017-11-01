import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return <div>
      <ul role="nav">
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/repos">Repos</NavLink></li>
        <li><NavLink to="/any">Param</NavLink></li>
      </ul>
      {this.props.children}
    </div>
  }
})
