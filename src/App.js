import './App.css';
import React, {useState} from "react";
// import ReactDOM from 'react-dom';
import GetData from "./components/js/Corps";
import {GoogleLogin} from 'react-google-login';
import Header from "./components/js/Header";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Images from "./components/js/Album";

const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj)
}


function App() {
    const [accessToken, setAccessToken] = useState(null)
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>

                <GoogleLogin
                    clientId='377720379934-goc16tv7jmf7s36csfrqbu0e4udicrju.apps.googleusercontent.com'
                    buttonText="Connectez-vous pour voir vos albums photos"
                    onSuccess={(res) => {
                        setAccessToken(res.accessToken)
                    }}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    accessType="code"
                    scope="https://www.googleapis.com/auth/photoslibrary.sharing"
                />
                {accessToken !== null && <GetData accessToken={accessToken}/>}

                <Switch>
                    <Route exact path="/album" component={Images}/>

                </Switch>

            </div>
        </BrowserRouter>

    );
}

export default App;
