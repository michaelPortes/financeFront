import InputCategories from '../../components/input/categories/categories-input.component.jsx';
import SimpleTable from '../../components/tables/categories/categories-table.components.jsx';
import './categoires.styles.css'

const Categories = () => {
    return(
        <div>
            <div className='input-categories'>
                <InputCategories />
            </div>
            <>
                <SimpleTable />
            </>
        </div>
    )
}


export default Categories;