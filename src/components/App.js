import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from "react";
import './../styles/App.css';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <BrowserRouter>
          <Switch>
            <Route exact path ='/' component={ItemList}></Route>
            <Route path = '/items/:id' component={ItemDetail}></Route>
          </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App
