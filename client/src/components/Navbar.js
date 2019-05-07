import React, {Component} from 'react';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <Navbar brand={<a />} alignLinks="right">
<Button node="a">button
</Button>
<Button node="a">
button 
<Icon right>
cloud
</Icon>
</Button>
<Button node="a" large>
large button
</Button>
</Navbar>
      </div>

    )
  }
}



 // <Navbar brand={<a />} alignLinks="right">
//<Button node="a">
//button
//</Button>
//<Button node="a">
//button 
//<Icon right>
//cloud
//</Icon>
//</Button>
//<Button node="a" large>
//large button
//</Button>
//</Navbar>
//     <div className="navbar-fixed">
//      <nav>
//        <div className="nav-wrapper">
//        <a href="#!" class="brand-logo">Frivolity</a>
//          <ul class="right hide-on-med-and-down">
//            <li><a href="sass.html">Login</a></li>
//          <li><a href="badges.html">{props.children}</a></li>
//        </ul>
//        </div>
//      </nav>
//  </div>
//)
//}

//}
  
export default Navbar;
