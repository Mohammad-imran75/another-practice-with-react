
const Linkid = ({route}) => {
    
    return (
        <nav>
            <ul className="flex">
                <li><a className="mr-6" href={route.path}>{route.name}</a></li>
            </ul>
        </nav>
    );
};

export default Linkid