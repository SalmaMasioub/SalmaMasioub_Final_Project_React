import React, { useState } from 'react';
import { products } from '../../../data/products';
import { Link } from 'react-router-dom';





const ShopProducts = () => {
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([])
    const [selectedColors, setSelectedColors] = useState([])




    const categories = [...new Set(products.map(p => p.category).flat())]
    const sizes = [...new Set(products.map(p => p.size))]
    const colors = [...new Set(products.map(p => p.color))]



    const filtrage = products.filter(product => {

        const matchingCat = selectedCategories.length === 0 || product.category.some(cat => selectedCategories.includes(cat))
        const matchingSize = selectedSizes.length === 0 || selectedSizes.includes(product.size)
        const matchingCol = selectedColors.length === 0 || selectedColors.includes(product.color)

        return matchingCat && matchingSize && matchingCol
    })
    const handleCategory = (category) => {
        setSelectedCategories(prev => prev.includes(category) ? prev.filter(cat => cat !== category) : [...prev, category]
        )
    }

    const handleSize = (size) => {
        setSelectedSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        )
    }

    const handleColor = (color) => {
        setSelectedColors(prev =>
            prev.includes(color) ? prev.filter(col => col !== color) : [...prev, color]
        )
    }


    return (
        <div className="flex">

            <div className="w-[25%]  p-6">


                <div className="mb-6">
                    <h3 className="font-extrabold text-xl mb-2 ">Categories</h3>
                    {categories.map(category => (
                        <div key={category} className="flex items-center mb-2">
                            <input className="mr-2" id={`category-${category}`} type="checkbox" checked={selectedCategories.includes(category)}
                                onChange={() => handleCategory(category)} />
                            <label>
                                {category}
                            </label>
                        </div>
                    ))}
                </div>




                <div className="mb-6">
                    <h3 className="font-extrabold text-xl mb-2 ">Sizes</h3>
                    {sizes.map(size => (
                        <div key={size} className="flex items-center mb-2">
                            <input className="mr-2" type="checkbox" id={`size-${size}`} checked={selectedSizes.includes(size)}
                                onChange={() => handleSize(size)} />
                            <label>{size}</label>
                        </div>
                    ))}
                </div>

                <div>
                    <h3 className="font-extrabold text-xl mb-2 ">Colors</h3>
                    {colors.map(color => (
                        <div key={color} className="flex items-center mb-2">
                            <input className="mr-2" type="checkbox" id={`color-${color}`} checked={selectedColors.includes(color)}
                                onChange={() => handleColor(color)} />
                            <label>
                                {color}
                            </label>
                        </div>
                    ))}
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-7 w-[75%]">
                {filtrage.map(product => (
                    <Link to={`/details/${product.title}`} key={product.id} className="overflow-hidden">
                        <div className="w-full h-96 relative group overflow-hidden">
                            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white hover:bg-red-700 text-sm rounded px-3 py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-250 z-10">
                                ADD TO CART
                            </button>
                        </div>
                        <h3 className="mt-2 font-light text-lg">{product.title}</h3>
                        <div className="flex gap-2 items-center">
                            <h3 className="text-black font-light">{product.price}</h3>
                            {product.oldprice && (
                                <h3 className="line-through font-light">{product.oldprice}</h3>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ShopProducts;
