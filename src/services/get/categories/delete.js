import axios from 'axios'

export const deleteCategories = async (id) => {
    return await axios.delete(`http://localhost:8080/categories/${id}`, {
        auth: {
            username: 'admin',
            password: 'admin'
          }
    })
}  
