import React, {Component} from  'react';
import {Link} from "react-router-dom";

class ContactList extends Component{

    state = {
        date : JSON.parse(localStorage.getItem("KT"))
    }

    render(){
      return(
        <table border="1">
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Last Name
                </th>
                <th>
                    Email
                </th>
                <th>
                    Phone
                </th>
            </tr>
            {this.state.date != null ? this.state.date.map((value,key) =>

                <tr>
                    <td>{value.name}</td>
                    <td>{value.lastName}</td>
                    <td>{value.email}</td>
                    <td>{value.phone}</td>
                    <td><Link to={`/del/${key}`}>Delete</Link></td>
                    <td><Link to={`/edit/${key}`}>Edit</Link></td>
                </tr>

                ):<tr><td colSpan="4">No data</td></tr>}
        </table>
      );
    }
  
  }
  
  export default ContactList;