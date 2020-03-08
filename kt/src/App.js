import React, {Component} from  'react'
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import AddContacts from "./components/AddContacts";
import ContactList from "./components/ContactList";
import DeleteContact from "./components/DeleteContact";
import EditContact from "./components/EditContact";

class App extends Component{

  render(){
    return(
      <div>
          <h1>Address Book</h1>
          <BrowserRouter>
            <ul>
              <li>
                <Link to="/">Contact list</Link>
              </li>
              <li>
                <Link to="/add">Add contact</Link>
              </li>
            </ul>
            <Switch>
                <Route exact path="/" component={ContactList} />
                <Route path="/add" component={AddContacts} />
                <Route path="/del/:id" component={DeleteContact} />
                <Route path="/edit/:id" component={EditContact}/>
            </Switch>
          
          </BrowserRouter>
      </div>
    );
  }

}

export default App;