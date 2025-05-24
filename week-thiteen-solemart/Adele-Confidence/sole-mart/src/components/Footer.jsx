import {FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaRegPaperPlane} from "react-icons/fa6";

const  Footer = () => {

    return (
      

      <footer className=" bg-gray-900 text-white px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-3">

            <div>
                <p className="font-medium text-sm"> Copyright @2025 Adele Confidence.</p>
                <p className="text-sm text-gray-400">All rights reserved</p>
                <div className="flex space-x-4 mt-4">
                    <a href="https://www.instagram.com/papi_adele/"><FaInstagram /></a>
                    <a href="https://web.facebook.com/odi.naka.adele.2025"><FaFacebook /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaYoutube /></a>
                </div>
            </div>

            <div>
                <h4 className="font-semibold mb-2">Company</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Testimonials</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-semibold mb-2">Support</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Terms of service</a></li>
                    <li><a href="#">Legals</a></li>
                    <li><a href="#">Privacy Policiy</a></li>
                    <li><a href="#">Status</a></li>
                </ul>
            </div>

            
            

            <div className=' relative w-full max-w-sm'>
                <h4 className="font-semibold mb-4">Stay up to date</h4>
                <span className="absolute inset-y-7 right-3 pl-2 flex mt-6 ">
                    <FaRegPaperPlane />
                </span>

                <input type="email" placeholder="Your email address"
                className="w-full px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
            </div>
        

        </div>

        </footer>

    )

}
export default Footer

