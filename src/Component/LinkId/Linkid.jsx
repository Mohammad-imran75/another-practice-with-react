
const Linkid = ({route}) => {
    
    return (
        <nav>
            <li><a className="mr-6 hover:bg-yellow-600 px-6 rounded-sm" href={route.path}>{route.name}</a></li>
        </nav>
    );
};

export default Linkid