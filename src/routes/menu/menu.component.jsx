import {Fragment} from 'react'
import { Link, Outlet } from 'react-router-dom';
import MenuHeader from "../../components/menu-header/menu-header.component";
import MenuUser from '../../components/menu-user/menu-user.component';

import './menu.style.css'

const Menu = () => {


    return( 
    <Fragment>
        <div className='menu'>
            <div>
                <Link to='/'>
                    Finance<b>Controller</b>
                </Link>
            </div>
            <div className='center-menu'>
                <MenuHeader/>
            </div>
            <div className='left-menu'>
                <MenuUser/>
            </div>
        </div>
        <Outlet />
    </Fragment>
    )

}

export default Menu;