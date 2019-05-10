import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<div className="navbar-fixed">
				<nav id="nav" className="z-depth-0">
					<div className="nav-wrapper grey">
						<a href="#!" class="brand-logo" >
							<i class="material-icons">cloud</i>frivolity
						</a>
						<ul class="right hide-on-med-and-down">
							<li>
								<a href="sass.html">
									<i class="material-icons">search</i>
								</a>
							</li>
							<li>
								<a href="badges.html">
									<i class="material-icons">view_module</i>
								</a>
							</li>
							<li>
								<a href="collapsible.html">
									<i class="material-icons">refresh</i>
								</a>
							</li>
							<li>
								<a href="mobile.html">
									<i class="material-icons">more_vert</i>
								</a>
							</li>
						</ul>
						<Link
							to="/"
							style={{
								fontFamily: 'monospace'
							}}
							className="col s5 brand-logo center black-text"
						>
							<i className="material-icons" />
						</Link>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
