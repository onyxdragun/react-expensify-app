// Higher Order Component (HOC) - A component that renders another component
// Reuse Code
// Render hijacking
// Prop manipulation
// Abstract state

import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && (
        <p>This is private info. Please don't share!</p>
      )}
      <WrappedComponent {...props}/>
    </div>
  );
};


const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props}/>
      ) : (
        <p>Please login to view the info.</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//--- 

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  <StrictMode>
   <AuthInfo isAuthenticated={false} info="These are the details"/>
  </StrictMode>
);