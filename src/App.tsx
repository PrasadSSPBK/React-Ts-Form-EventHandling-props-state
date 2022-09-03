import React from 'react';
import './App.css';
import EventHandling from './components/EventHandling';
import FormHandling from './components/FormHandling';
import PropsInClassComponents from './components/PropsInClassComponents';
import PropsInFunComponents from './components/PropsInFunComponents';
import StateInClassComponents from './components/StateInClassComponents';
import StateInFunComponents from './components/StateInFunComponents';
// import UserList from "./components/UserList";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-6">
          <PropsInFunComponents name={"Jay"}/>
          </div>
          <div className="col-6">
          <PropsInClassComponents name={"Jay"}/>
          </div>
          <div className="col-6">
          <StateInFunComponents/>
          </div>
          <div className="col-6">
          <StateInClassComponents/>
          </div>
          <div className="col-6">
          <EventHandling/>
          </div>
          <div className="col-6">
          <FormHandling/>
          </div>
          </div>
      </div>
       
       
       
      
    </React.Fragment>
  );
}

export default App;
