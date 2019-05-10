import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Nav } from '../components/layout/Navbar';


class Dashboard extends Component {



  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
    const { user } = this.props.auth;

return (
<div className="dashboard">
      <div style={{ height: "75vh" }} className="container valign-wrapper">
      <Nav/>
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>

           
          </div>
        </div>
</div>
{/* 

<div className="container v-align wrapper">

        <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input disabled value="I am not editable" id="disabled" type="text" className="validate"/>
          <label for="disabled">Disabled</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate"/>
          <label for="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          This is an inline input field:
          <div className="input-field inline">
            <input id="email_inline" type="email" className="validate"/>
            <label for="email_inline">Email</label>
            <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
          </div>
        </div>
      </div>
    </form>
  </div>

</div> */}



</div>

    
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);














// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";

// class Dashboard extends Component {
//   onLogoutClick = e => {
//     e.preventDefault();
//     this.props.logoutUser();
//   };

// render() {
//     const { user } = this.props.auth;

// return (
//       <div style={{ height: "75vh" }} className="container valign-wrapper">
//         <div className="row">
//           <div className="col s12 center-align">
//             <h4>
//               <b>Hey there,</b> {user.name.split(" ")[0]}
//               <p className="flow-text grey-text text-darken-1">
//                 You are logged into a full-stack{" "}
//                 <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
//               </p>
//             </h4>
//             <button
//               style={{
//                 width: "150px",
//                 borderRadius: "3px",
//                 letterSpacing: "1.5px",
//                 marginTop: "1rem"
//               }}
//               onClick={this.onLogoutClick}
//               className="btn btn-large waves-effect waves-light hoverable blue accent-3"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// Dashboard.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(
//   mapStateToProps,
//   { logoutUser }
// )(Dashboard);