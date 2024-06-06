import axios from 'axios'

export const delelteLaunch = async (id) => {
    return await axios.delete(`http://localhost:8080/launch/${id}`, {
        auth: {
            username: 'admin',
            password: 'admin'
          }
    })
}  
