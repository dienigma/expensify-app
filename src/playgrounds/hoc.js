import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info please dont share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
const AdminInfo = withAdminWarning(Info);

// RequireAuthentication

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuth ? (
        <WrappedComponent {...props} />
      ) : (
        <p>You need to login</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="This is the info" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuth={true} info="This is the info" />,
  document.getElementById("app")
);
