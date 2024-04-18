import axios from 'axios'

export const getUsers = async () => {
    return await axios.get('http://localhost:8080/users', {
        auth: {
            username: 'admin',
            password: 'admin'
          }
    })
}  

