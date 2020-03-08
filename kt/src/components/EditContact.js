import React, {Component} from  'react'
import {Redirect} from "react-router-dom";

class EditContact extends Component{

    date =  JSON.parse(localStorage.getItem("KT"));
    id = this.props.match.params.id

    state = {
      name : this.date[this.id].name,
      lastName : this.date[this.id].lastName,
      email : this.date[this.id].email,
      phone : this.date[this.id].phone,
      redirect : false
    }

    editContact = () => {
        let newContact = {
            name: document.querySelector("input[name = 'name']").value,
            lastName: document.querySelector("input[name = 'lastName']").value,
            email: document.querySelector("input[name = 'email']").value,
            phone: document.querySelector("input[name = 'phone']").value
        }

        this.date[this.id] = newContact;
        localStorage.setItem("KT", JSON.stringify(this.date))

        this.setState({redirect : true})
    }

    cancel = () =>{
        this.setState({redirect : true})
    }

    valuChange = (event) =>{

        this.setState({ [event.target.name] : event.target.value});
    }

    render(){

        if(this.state.redirect === true){
            return <Redirect to="/" />
        }


        return(
            <div>
                <p>
                    Name: <br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.valuChange} />
                </p>
                <p>
                    Last Name: <br/>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.valuChange} />
                </p>
                <p>
                    Email: <br/>
                    <input type="text" name="email" value={this.state.email} onChange={this.valuChange} />
                </p>
                <p>
                    Phone: <br/>
                    <input type="text" name="phone" value={this.state.phone} onChange={this.valuChange} />
                </p>
                <p>
                   <button onClick={this.editContact}>Change date</button>
                   <button onClick={this.cancel} >Cancel</button>
                </p>
            </div>
        ); 
    }
  
  }
  
  export default EditContact;