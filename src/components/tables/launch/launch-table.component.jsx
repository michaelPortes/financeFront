import { useEffect, useState } from 'react'
import { getLaunch } from '../../../services/get/launch/getList'
import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


import './launch-table.styles.css'

  
const columns = [
    { field: 'id', headerName: 'ID', width: 10 },
    { field: 'description', headerName: 'description', width: 100 },
    { field: 'date_maturity', headerName: 'date maturity', width: 100 },
    { field: 'date_payment', headerName: 'date payment', width: 100 },
    { field: 'cost', headerName: 'cost', width: 100 },
    { field: 'observation', headerName: 'observation', width: 100,
        valueGetter: (value) =>  `${value || 'sem observações'}`
     },
    { field: 'type', headerName: 'type', width:100 },
    { field: 'categoriesId', headerName: 'category', width: 150,
        valueGetter: (value) =>  `${value.name}`
     },
    { field: 'userId', headerName: 'users', width: 150,
        valueGetter: (value) =>  `${value.name}`
     },
    {
      field: 'delete',
      headerName: 'Delete',
      sortable: false,
      width:100,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = () => {
          const id = params.row.id;
    //       delelteLaunch(id);
    //       .then(() => window.location.reload())
    //       .catch(event => (console.log('ERR: ', event)))
        };
  
        return <button className='trash' onClick={onClick}><DeleteForeverIcon/></button>;
      }
    },
  ]


const TableLaunch = () => {
    
    const [launchList, setLaunchList]  = useState([]);

    useEffect(() => {
        getLaunch()
        .then(e => {
            setLaunchList(e.data)
        })
        .catch(err => console.log('Err: ', err))
        
    }, [launchList ==! []])

    return(
        <>
            table
            {
                launchList == 'Empty list' ?
                <div>
                    <h1>{launchList}</h1>
                </div>
                :
                <div>
                    <DataGrid
                        rows={launchList}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {page: 0, pageSize: 10},
                            },
                        }}
                        pageSizeOptions={[15, 30, 100]}
                        
                    />
                </div>
            }
        </>
    )

}

export default TableLaunch