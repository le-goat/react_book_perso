// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
// import ReactDOM from 'react-dom';
import GetData from "./components/js/Corps";
import { GoogleLogin } from 'react-google-login';
import Header from "./components/js/Header";

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
    const [accessToken, setAccessToken] = useState(null)
console.log({accessToken});
  return (
    <div className="App">
        <GoogleLogin
            clientId='377720379934-goc16tv7jmf7s36csfrqbu0e4udicrju.apps.googleusercontent.com'
            buttonText="Login to see my photos"
            onSuccess={(res) => {
                console.log(res);
                console.log(res);
                setAccessToken(res.accessToken)
            }}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            accessType="code"
            scope="https://www.googleapis.com/auth/photoslibrary.sharing"
        />
        {accessToken !== null && <GetData accessToken={accessToken}/>}
    </div>
  );
}

export default App;
