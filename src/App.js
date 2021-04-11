// import logo from './logo.svg';
import './App.css';
import React from "react";
// import ReactDOM from 'react-dom';

import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj)
}

// ReactDOM.render(
//     <GoogleLogin
//         clientId="377720379934-goc16tv7jmf7s36csfrqbu0e4udicrju.apps.googleusercontent.com"
//         buttonText="Login"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={'single_host_origin'}
//     />,
//     document.getElementById('googleButton')
// );


function App() {
  return (
    <div className="App">
      <GoogleLogin
          clientId='377720379934-goc16tv7jmf7s36csfrqbu0e4udicrju.apps.googleusercontent.com'
          buttonText="Login to see my photos"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}/>
    </div>
  );
}

export default App;
