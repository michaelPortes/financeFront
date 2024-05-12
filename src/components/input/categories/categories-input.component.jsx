
import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { addNewCategories } from '../../../services/get/categories/add';

import './categories-input.styles.css'

const InputCategories = () => {

    const [name, setName]  = useState('');
    const [description, setDescription] = useState('');
    

    const handleAddClick = () => {
        addNewCategories(name, description)
        .then(() =>  window.location.reload())
        .catch(e => console.log('ERRR:', e))
    }

    return(
        <div className='box-with-title'>
            <h6>Adicione uma nova categoria</h6>
                <div className='box-input'>
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '10ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="standard-basic" label="Name" variant="standard" size='small'
                    onChange={e => setName(e.target.value)}
                    />
                </Box>

                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="standard-basic" label="Description" variant="standard" size='small'
                    onChange={e => setDescription(e.target.value)}/>
                </Box>
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '5ch' },
                }}
                noValidate
                autoComplete="off"
                >

                <Button 
                    variant="contained"
                    onClick={() => {
                        handleAddClick();
                    }}
                    >Add</Button>
                </Box>
                    </div>
        </div>
    )
}


export default InputCategories