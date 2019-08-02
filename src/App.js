import React from 'react';
import logo from './logo.svg';

import { Switch, Route } from 'react-router-dom';

import './App.scss';
import MainHeader from './components/general/MainHeader/MainHeader';
import Home from './components/Home/Home';
import BooksList from './components/Books/BooksList/BooksList';
import Page from './components/Page/Page';
import BookDetail from './components/Books/BookDetail/BookDetail';
import Logout from './components/general/Logout/Logout';

function App() {
  return (
    <div className="App">
          
      <MainHeader/>

      <main>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/libros" component={BooksList}/>
          <Route exact path="/libro/:id" component={BookDetail}/>
          
          <Route exact path="/vision" render={
            (props)=>{

              return <Page title="Visión"/>
              
            }
          }/>
          
          <Route exact path="/salir" component={Logout}/>

        </Switch>

      </main>

    </div>
  );
}

export default App;
