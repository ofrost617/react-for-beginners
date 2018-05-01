// first we need a module bundler which will take all of our js files and package all of the imports and exports and package them into a file. In order to do this we need a bundler, we'r going to use webpack.
// Create react app uses webpac behind the scenes to do a quick webpack setup

import React from 'react';
// Loads everything form the react library into the react variable. Finds it from package.json
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// We jsut need the rener method rather than the whole react dom
import './css/style.css';
// Webpack will import style.css and put a css tag on the page for us
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from "./components/NotFound";
// Without a rel path, node thinks this should be located in node_modules
import Header from './components/Header';


// Create a stateless functional component to be our router
// if im on store page show me app component, if I'm on homepage show me store picker comp otherwise show me a not found component.
// Here, both path and component are acting as props into which we are passing a JS variable. If you're passing somethignother than a string, it needs to
// be passed in in {}
const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route exact path="/store/:storeId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

{/* // render(<StorePicker/>, document.querySelector('#main'));
// we use render to name the tag as StorePicker to render this component, and we want to add it to the DOM element wiht the id of 'main'
// (We could also use document.getElementById instead of querySelector) */}
render(<Root />, document.querySelector('#main')); 

