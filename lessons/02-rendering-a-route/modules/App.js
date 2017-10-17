import React from 'react'
import { Link,IndexLink } from 'react-router'
 
export default React.createClass({
  render() {
    return (<div>
      <p>Hello02, React Router!</p>
      <p>Hello03, React Router: Link!</p>
      <p>Hello04, React Router: 嵌套!</p>
      <p>Hello05, React Router: activeLink!</p>
      <p>Hello06, React Router: params!</p>
      <p>Hello07, React Router: 多层嵌套!</p>
      <p>Hello08, React Router: indexRoute!</p>
      <p>Hello09, React Router: IndexLink!</p>
      <p>Hello10, React Router: browserHistory!</p>
      <ul role="nav">
        <li><Link to="/about" activeClassName="active">About</Link></li>
        <li><Link to="/repos" activeClassName="active">Repos</Link></li>
        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
      </ul>

      {this.props.children}
    </div>)
  }
})
