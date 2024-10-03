import React from 'react';

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
    ];

    return (
        <div className='bg-zinc-950 shadow-inner shadow-black p-4'>
            <h1 className='text-3xl md:text-6xl selection:text-black font-thin text-center p-3 text-white'>Choose your type</h1>
            <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 mx-auto">
                {perfumeCategories.map((perfume, index) => (
                    <div key={index} className="card p-4 bg-blue-400 rounded-md cursor-pointer hover:shadow-inner hover:bg-blue-500 transition-all">
                        <h3 className='font-medium'>{perfume}</h3>
                        <p>@Rs.{Math.floor(Math.random() * 10000) + 1}/-</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Perfumes;
