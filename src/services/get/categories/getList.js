import axios from 'axios'

export const getCategories = async () => {
    return await axios.get('http://localhost:8080/categories', {
        auth: {
            username: 'admin',
            password: 'admin'
          }
    })
}  
