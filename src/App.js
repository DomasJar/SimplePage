import React from 'react';
import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';
import './App.css';

import Logo from "./components/Logo";
import Header from "./components/Header";

import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import Intro from "./components/Intro";
import Media from "./components/Media";
import Activities from "./components/Activities";

function App() {
  return (
      <div className="App noselect">
          <SimpleBar id="myBar" style={{height: '100vh'}}>
              <Header/>
              <div className="container-fluid">
                  <div className="row">
                      <div className="col">
                        <Logo/>
                      </div>
                  </div>
                  <div className="row pad-ud">
                      <div className="col">
                          <Intro/>
                      </div>
                  </div>
                  <div className="row pad-ud">
                      <div className={"col"}>
                          <Activities/>
                      </div>
                  </div>
                  <div className="row pad-ud">
                      <div className={"col"}>
                          <Media/>
                      </div>
                  </div>
                  <div className="row pad-ud">
                      <div className={"col "}>
                          <ContactMe/>
                      </div>
                  </div>
              </div>
              <Footer/>
          </SimpleBar>
      </div>
  );
}

export default App;