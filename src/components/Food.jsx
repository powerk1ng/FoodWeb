import { data } from "../assets/data"
import { filter } from "../assets/filters";

import { useState } from "react";

import FilterRow from "./FilterRow";

const Food = () => {
    const [foods, setFoods] = useState(data)
    
    // Filter Type of food
    const filterType = (category) => {
        setFoods(
            data.filter(item => {
                return item.category === category
            })
        )
    }

    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-12">
        <h2 className="text-orange-600 font-bold max-sm:text-2xl text-4xl text-center">Top Rated Menu Items</h2>

        {/* Filter Row */}
        <div className="flex flex-col lg:flex-row justify-between mt-5 gap-y-5 relative">
            
            {/* Filter Type */}
            <button 
                onClick={()=> setFoods(data)}
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white absolute left-1/2 max-lg:left-[45%] top-1/2 max-md:left-[45%] max-[415px]:top-20 max-sm:left-[45%]">All</button>
            <FilterRow type="type" data={filter} filterType={filterType}/>

            {/* Filter Price */}
            <FilterRow type="price" data={filter} filterPrice={filterPrice}/>
        </div>

        {/* Display Foods */}
        <div className="grid grid-cols-2 max-[500px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item,index)=> (
            <div key={index} className="border shadow-2xl rounded-lg hover:scale-105 duration-300">
                <img 
                    className="h-[200px] max-[500px]:h-[250px]  w-full object-cover rounded-t-lg" 
                    src={item.image} 
                    alt={item.name} />
                <div className="flex justify-between px-2 py-4 ">
                    <p className="font-bold">{item.name}</p>
                    <p><span className="bg-orange-500 text-white py-1 px-2 rounded-full">{item.price}</span></p>
                </div>
            </div>
        ))} 
        </div>
       
    </div>
  )
}

export default Food