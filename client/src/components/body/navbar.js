import React from 'react'

const Body=props=>

<div className="navbar-fixed">
  <nav>
    <div className="nav-wrapper">
      <a href="#!" class="brand-logo">Frivolity</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html">Login</a></li>
        <li><a href="badges.html">{props.children}</a></li>
      </ul>
    </div>
  </nav>
</div>

export default Body;