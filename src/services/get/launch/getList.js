import axios from 'axios'

export const getLaunch = async () => {
    return await axios.get('http://localhost:8080/launch', {
        auth: {
            username: 'admin',
            password: 'admin'
          }
    })
}  
