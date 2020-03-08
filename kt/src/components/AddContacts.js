import React, {Component} from  'react';
import {Redirect} from "react-router-dom";

class AddContacts extends Component{

    state = {

        redirect : false
    }
    
    addContact = () => {
        let newContact = {
            name: document.querySelector("input[name = 'name']").value,
            lastName: document.querySelector("input[name = 'lastName']").value,
            email: document.querySelector("input[name = 'email']").value,
            phone: document.querySelector("input[name = 'phone']").value
        }

        let date = localStorage.getItem("KT");

        if(date == null){
            date = [];
        }else{
            date = JSON.parse(date);
        }

        date.push(newContact);
        localStorage.setItem("KT", JSON.stringify(date));

        this.setState({redirect : true})

    }

    cancel = () =>{
        this.setState({redirect : true})
        
    }

    render(){

        if(this.state.redirect === true){
            return <Redirect to="/" />
        }

        return(
            <div>
                <p>
                    Name: <br/>
                    <input type="text" name="name"/>
                </p>
                <p>
                    Last Name: <br/>
                    <input type="text" name="lastName"/>
                </p>
                <p>
                    Email: <br/>
                    <input type="text" name="email"/>
                </p>
                <p>
                    Phone: <br/>
                    <input type="text" name="phone"/>
                </p>
                <p>
                   <button onClick={this.addContact}> Save new date</button>
                   <button onClick={this.cancel} >Cancel</button>
                </p>
            </div>
        );        
    }
}

export default AddContacts;