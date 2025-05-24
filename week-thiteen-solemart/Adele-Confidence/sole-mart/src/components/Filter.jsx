const Filter = () => {
    
           
        return (
            <>
                <div className="flex gap-8 justify-center m-auto mt-3 mb-3">
                    
                    <select id="ShoeType" className="bg-gray-300 rounded-full text-black text-md px-2 py-1 ">
                        <option value="">Shoe Type</option>
                        <option value="Trainers">Trainer</option>
                        <option value="Vans">Vans</option>
                        <option value="Stiletto">Stiletto</option>
                        <option value="TPoint hill">Point Hill</option>
                    </select>

                    <select id="Price" className="bg-gray-300 rounded-full text-black text-md px-2 py-1">
                        <option value="">Price</option>
                        <option value="Trainers">$129</option>
                        <option value="Vans">$180s</option>
                        <option value="Stiletto">$65</option>
                        <option value="Point hill">$75</option>
                    </select>

                    
                    <select id="Size Selection" className="bg-gray-300 rounded-full text-black text-md px-2 py-1">
                        <option value="">Size Selection</option>
                        <option value="Small">30-39</option>
                        <option value="Medium">40-42</option>
                        <option value="Large">43-45</option>
                        <option value="Extra Large">45-Above</option>
                    </select>

                    
                    <select id="Color" className="bg-gray-300 rounded-full text-black text-md px-2 py-1">
                        <option value="">Color</option>
                        <option value="Black">Black</option>
                        <option value="Blue">Blue</option>
                        <option value="Brown">Brown</option>
                        <option value="Red">Red</option>
                        <option value="Grey">Grey</option>
                    </select>

                
                    <select id="Material" className="bg-gray-300 rounded-full text-black text-md px-2 py-1">
                        <option value="">Material</option>
                        <option value="Leather">Leather</option>
                        <option value="Suede">Suede</option>
                        <option value="Canvas">Canvas</option>
                        <option value="Rubber">Rubber</option>
                    </select>

                    
                    <select id="Brand" className="bg-gray-300 rounded-full text-black text-md px-2 py-1">
                        <option value="">Brand</option>
                        <option value="Nike">Nike</option>
                        <option value="Adidas">Adidas</option>
                        <option value="Puma">Puma</option>
                        <option value="Clarks">Clarks</option>
                    </select>


                </div>

             </>
                
            
        )
    }
       

export default Filter

