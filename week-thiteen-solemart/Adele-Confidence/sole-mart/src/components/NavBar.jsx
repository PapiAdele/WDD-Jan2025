import {FaCartShopping, FaRegHeart, FaMagnifyingGlass} from "react-icons/fa6";

const NavBar = () => {

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
        { name: "Product Listing Page", path: "/products" },
        { name: "Sign Up", path: "/signup" },
    ];

    return (
        <nav className="py-6 flex justify-between items-center mb-10">
            <div>
                <img src="/logo.png" alt="" />
            </div>
            <ul className="flex gap-8">
                {navLinks.map(link => (
                    <li className="text-sm  " key={link.name}>{link.name}</li>
                )
                )}
            </ul>

            <div className="flex gap-5">

                <div className='bg-gray-300 relative w-full max-w-sm'>
                    <span className="absolute inset-y-0 right-3 pl-4 flex items-center">
                        <FaMagnifyingGlass className="size-5"/>
                    </span>
                    <input type="text" placeholder="What are you looking for?" className="pr-10 pl-4 pt-1 boreder rounded w-full"/>
                    
            
                </div>

                <FaRegHeart className="size-7"/>
                <FaCartShopping className="size-7"/>
                
                
            </div>
        </nav>

       
    )
}

export default NavBar