import { useState } from "react";
import Linkid from "../LinkId/Linkid";
import { HiOutlineMenuAlt1} from "react-icons/hi";
import {RiCloseLine}  from 'react-icons/ri'

  
const NavBar = () => {
    const [open,setOpen] = useState(true)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/products/:id', name: 'Product Detail' },
        { id: 5, path: '/contact', name: 'Contact' }
      ];
    return (
        <div className='md:flex '>
            <div className="text-2xl md:hidden bg-yellow-200 py-2
            " onClick={()=>setOpen(!open)}>
                {
                    open === true ?
                    
                    <RiCloseLine></RiCloseLine>
                    :
                    <HiOutlineMenuAlt1></HiOutlineMenuAlt1>
                    
                }
            
            </div>
            <ul className={`md:flex duration-1000  bg-yellow-300 absolute p-6 md:static
            ${open ? 'top-8':'-top-60'} `}>
            {
                routes.map(route =><Linkid key={route.id} route={route}></Linkid>)
            }
            </ul>
        </div>
    );
};

export default NavBar;