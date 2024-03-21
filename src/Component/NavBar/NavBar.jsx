import Linkid from "../LinkId/Linkid";


  
const NavBar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/products/:id', name: 'Product Detail' },
        { id: 5, path: '/contact', name: 'Contact' }
      ];
    return (
        <div className="flex">
            {
                routes.map(route =><Linkid key={route.id} route={route}></Linkid>)
            }
        </div>
    );
};

export default NavBar;