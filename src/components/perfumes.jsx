//component to render all types of perfumes in cards each card has a name, image, price, and  buttons to call now and add to cart
import React from 'react'

function Perfumes() {
    let perfumeCategories = [
        'Floral',
        'Woody',
        'Oriental',
        'Fresh',
        'Citrus',
        'Fruity',
        'Gourmand',
        'Aquatic',
        'Spicy',
        'Green'
    ]
  return (
    <>
    <div className='bg-zinc-950 shadow-inner shadow-black '>
        <h1 className='text-6xl selection:text-black font-thin text-center p-3 text-white'>Choose your type</h1>

    <div className="container flex gap-4 w-full  py-4 mx-auto">
        {
            perfumeCategories.map((perfume, index) => {
                return (
                    <div key={index} className="card w-64 text-sm h-16 rounded-md cursor-pointer content-center p-3 bg-blue-400 mx-auto hover:shadow-inner hover:bg-blue-500 hover:scale-95 transition-all  hover:shadow-blue-600">
                        
                        <h3 className='font-medium'>{perfume}</h3>
                        <p>@Rs.{
                           
                            Math.floor(Math.random() * 100000) + 1
                            
                            }/-</p>
                        
                    </div>
                )
            })
        }
    </div>
    </div>
    </>
  )
}

export default Perfumes