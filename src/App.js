import React from 'react';
import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';
import './App.css';

import Logo from "./components/Logo";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";

function App() {
  return (
      <div className="App">
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
                          <h2>Hello</h2>
                          <p>My name is Domas</p>
                          <p>I am an amateur music producer and a hobbyist programmer</p>
                      </div>
                  </div>
                  <div className="row">
                      <div className={"col no-pad"}>
                          <Carousel/>
                      </div>
                  </div>
                  <div className="row pad-ud">
                      <div className={"col no-pad"}>
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