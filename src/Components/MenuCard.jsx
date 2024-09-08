import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import SubMenu from './SubMenu';

const MenuCard = ({ items }) => {
    const [title] = useState(items?.title);
    const [menu] = useState(items.itemCards);
    const [showMenu, setShowMenu] = useState(true);

    return (
        <div key={uuidv4()} className='w-full mx-auto h-auto'>
            <div className=' w-full flex justify-between p-4 bg-white shadow-lg rounded-lg border border-gray-200'
                onClick={() => setShowMenu(!showMenu)}
            >
                <h1 className='text-2xl font-bold'>{title} ({menu?.length})</h1>
                <span className='text-2xl font-bold' >{showMenu === false ? <i className="fa-solid fa-caret-down"></i> : <i className="fa-solid fa-caret-up"></i>}</span>
            </div>


            {
                showMenu && <SubMenu menu={menu} />
            }
        </div>
    )
}

export default MenuCard
