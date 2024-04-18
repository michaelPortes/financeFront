import { createContext, useState, useEffect }  from 'react'
//Esse é o valor atual de acesso
import axios from 'axios';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})


export const UserProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser}

  useEffect(() => {
    const unsubscribe = axios.get('http://localhost:8080/users/1', {
        auth: {
          username: 'admin',
          password: 'admin'
        }})
        .then( resp => {

            if(resp.data) {
                console.log(resp.data)
            }
            setCurrentUser(resp.data)
        })

    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}