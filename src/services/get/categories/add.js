import axios from 'axios'

export const addNewCategories = async (name, description) => {
    const auth = {
        username: 'admin',
        password: 'admin'
    };

    return await axios.post(`http://localhost:8080/categories`, {
        name: name,
        description: description
    }, {
        auth: auth
    });
}  
