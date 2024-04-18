import * as React from 'react';
import MenuHeader from "../../components/menu-header/menu-header.component";
import MenuUser from '../../components/menu-user/menu-user.component';

import './menu.style.css'
import ResponsiveGrid from '../../components/home-grid/home-grid.component';

export default function Menu(){


    return( 
    <>
        <div className='menu'>
            <div>
                Finance<b>Controller</b>
            </div>
            <div className='center-menu'>
                <MenuHeader/>
            </div>
            <div className='left-menu'>
                <MenuUser/>
            </div>
        </div>
    </>
    )

}