import React, { useContext, useEffect, useState} from "react";
import { UserContext } from "../../context/user-context/user.context";
import axios from "axios";
import { getUsers } from "../../services/get/users/users";

const MenuUser = () => {

  const [user, setUser] = useState([]);

  useEffect(() => {

    getUsers()
    .then(
      resp => {
        setUser(resp.data)
        
      }
    )
    .catch( err => console.log('menuUserErr: ', err))
      
    }, [])
    
    console.log('COMO VEM: ', user)
  return (
    <div>
      {
        user[0] ? 
        <p>
        Welcome <b>{user[0].name}</b> 
        </p>
      :
        <p>
          Welcome <b>User</b>
        </p>
      }
    </div>
  );
}


export default MenuUser