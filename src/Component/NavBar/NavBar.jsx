import { useState } from "react";
import Linkid from "../LinkId/Linkid";
import { HiOutlineMenuAlt1} from "react-icons/hi";
import {RiCloseLine}  from 'react-icons/ri'

  
const NavBar = () => {
    const [open,setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/products/:id', name: 'Product Detail' },
        { id: 5, path: '/contact', name: 'Contact' }
      ];
    return (
        <div className="flex">
            <div className="text-2xl md:hidden" onClick={()=>setOpen(!open)}>
                {
                    open === true ?
                    <HiOutlineMenuAlt1></HiOutlineMenuAlt1>:
                    <RiCloseLine></RiCloseLine>
                }
            
            </div>
            {
                routes.map(route =><Linkid key={route.id} route={route}></Linkid>)
            }
        </div>
    );
};

export default NavBar;