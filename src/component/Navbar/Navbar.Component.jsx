
const Navbar = () => {
    return ( 
        <div className="bg-white fixed right-0 left-0 top-0 h-20 container-fluid px-60 flex justify-between items-center gap-2">
            <h1 className="cursor-pointer font-medium text-gray-800 text-lg">Portfolio</h1>
            <ul className="flex gap-10">
                <li><a className="text-lg font-medium text-gray-800" href="">About</a></li>
                <li><a className="text-lg font-medium text-gray-800" href="">Projects</a></li>
                <li><a className="text-lg font-medium text-gray-800" href="">Contact</a></li>                
            </ul>
        </div>
     );
}
 
export default Navbar;