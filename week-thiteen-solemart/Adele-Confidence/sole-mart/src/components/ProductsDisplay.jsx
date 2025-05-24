import { useEffect } from "react"
import { useState } from "react"
import {FaRegStar, FaRegStarHalf, FaRegHeart} from "react-icons/fa6";


const ProductsDisplay = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json')
        const data = await response.json()
        setProducts(data.products)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-8 mb-2">
      {
        products.map((product) => (
          <div key={product.id} className="">
            
            <div className=' relative w-full max-w-sm'>
              
                    <span className="absolute mr-auto ml-7 right-25 pl-2 flex mt-4">
                      <FaRegHeart className="bg-white rounded-full size-5 border-white" />
                    </span>
                    <img src={product.imageSrc} alt={product.name} />
            </div>

            <div>
              <div className="py-3 pl-2 flex gap-10 items-center mb-1">
                <h2 className="font-light">{product.name}  </h2>
                <h2 className="font-bold">${product.price}</h2>
              </div>

              <p className="font-extralight">{product.numberInStock} types shoes available</p>

                       
              <p>({product.numberOfReviews})</p>

              <div>
                <button className="bg-blue-900 rounded-full border-2 text-white font-semibold text-md px-2 py-2 hover:bg-white hover:text-blue-900">Add To Cart</button>
                <button className="bg-white rounded-full border-2 border-gray-400 text-black  font-semibold text-md px-2 py-2  hover:bg-black hover:text-white">Add Shortlist</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ProductsDisplay

// useEffect and useState