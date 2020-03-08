import React, {Component} from  'react';
import {Redirect} from "react-router-dom";


class DeleteContact extends Component{

    state = {
        date : JSON.parse(localStorage.getItem("KT")),
        id : this.props.match.params.id,
        redirect: false
    }

    delContact = () => {
        this.state.date.splice(this.state.id, 1);
        localStorage.setItem("KT", JSON.stringify(this.state.dane));
        this.setState({redirect : true});
    }

    cancel = () =>{
        this.setState({redirect : true});
    }


    render(){

        if(this.state.redirect === true){
            return <Redirect to="/" />
        }

      return(
        <div>
           <p>Are you sure that you would like to delete the contact? </p>
           <p>Name: {this.state.date[this.state.id].name}</p>
           <p>Last Name: {this.state.date[this.state.id].lastName}</p>
           <p>
               <button onClick={this.delContact}>Yes</button>
               <button onClick={this.cancel}>No</button>
           </p>
        </div>
      );
    }
  
  }
  
  export default DeleteContact;