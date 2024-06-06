import * as React from 'react';
import { Button, Grid } from '@mui/material';
import { DataGrid, GridToolbarDensitySelector, GridToolbarContainer } from '@mui/x-data-grid';

import './categories-table.styles.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { getCategories } from '../../../services/get/categories/getList';
import { useEffect, useState } from 'react';
import { deleteCategories } from '../../../services/get/categories/delete';


function CustomPagination() {
  return (
    <GridToolbarContainer>
      <Grid container spacing={3} alignItems="center">
        <Grid item>
          <GridToolbarDensitySelector />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Meu Botão
          </Button>
        </Grid>
      </Grid>
    </GridToolbarContainer>
  );
}

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 130 },
  { field: 'description', headerName: 'descrição', width: 450 },
  {
    field: 'delete',
    headerName: 'Delete',
    sortable: false,
    width: 100, 
    disableClickEventBubbling: true,
    renderCell: (params) => {
      const onClick = () => {
        const id = params.row.id;
        deleteCategories(id)
        .then(() => window.location.reload())
        .catch(event => (console.log('ERR: ', event)))
      };

      return <button className='trash' onClick={onClick}><DeleteForeverIcon/></button>;
    }
  },
]
const SimpleTable = () => {

    const [valueTables, setValueTables] = useState([]);

    useEffect(() => {
      getCategories()
      .then(event => {
        setValueTables(event.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error );
      });
    },[valueTables ==! []])

    return (
      <div className='body-table'>
              {
                valueTables == 'Empty list' ? 
                  <>
                    <h1>{valueTables}</h1>
                  </> 
                :
                <div style={{ height: 400, width: '100vh'}}>
                  <DataGrid
                    rows={valueTables}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                      },
                    }}
                    pageSizeOptions={[5, 10]}
                    components={{
                      Toolbar: CustomPagination,
                    }}
                  />
              </div>
        }
        </div>
      );
}


export default SimpleTable