import React from 'react'

function Products() {
  const perfumes = [
    {
      name: "Chanel No. 5",
      image:
      "https://zebramo-production.eu-central-1.linodeobjects.com/product_images/2024-12/01HSGCAKTHPBCBNBG94ZJ39TMJ_256x256.jpeg",
      info: "A classic fragrance with a blend of floral and aldehydic notes.",
    },
    {
      name: "Dior Sauvage",
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnXQThkaKdCDrrnMTk_uj3f4FVm8vSbuSycw&s",
      info: "A fresh and spicy scent with notes of bergamot and pepper.",
      price: 699
    },
    {
      name: "Gucci Bloom",
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgOhrst1MR-FbB2i8mf8AGzMbUMUhyOjhnw&s",
      info: "A floral fragrance with notes of jasmine, tuberose, and Rangoon creeper.",
      price: 349
    },
    {
      name: "Tom Ford Black Orchid",
      image:
      "https://bellegirllifestyle.com/cdn/shop/products/Tom-Ford-Black-Orchid-Eau-De-Parfum-Spray-100ml-for-women-online-on-deobazaar_800x.jpg?v=1679905340",
      info: "A luxurious and sensual fragrance with dark and rich notes.",
      price: 499
    },
    {
      name: "Yves Saint Laurent Black Opium",
      image:
      "https://images-eu.ssl-images-amazon.com/images/I/61xjYK+FiIL._AC_UL600_SR600,600_.jpg",
      info: "A seductive scent with notes of coffee, vanilla, and white flowers.",
      price: 299
    },
    {
      name: "Jo Malone London Lime Basil & Mandarin",
      image:
      "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/9/9/99827f0690251081035.jpg",
      info: "A fresh and zesty fragrance with notes of lime, basil, and mandarin.",
      price: 199
    },
    {
      name: "Marc Jacobs Daisy",
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQWs8k_1iHnprWvHH7148Dv7eryN205074g&s",
      info: "A light and airy floral fragrance with notes of strawberry, violet leaves, and jasmine.",
      price: 249
    },
    {
      name: "Versace Bright Crystal",
      image:
      "https://lh6.googleusercontent.com/proxy/Zvuw-6-hbymR0GpIHaLZChJ7KZjmcAB_ZjxarP1Qe88lcs556xRRoStNwjnNNUhspqetcQpb-vj-lcv3HrhaRM7IyI1YMf04hU195JE6l93xJIba29rRp8kwbjnXdI-fQbscM_4ssLSC9CVSuYJSYbStltX8DLIwRmh8meaBCw",
      info: "A fresh and vibrant scent with notes of pomegranate, peony, and magnolia.",
      price: 449
    },
    {
      name: "Lancome La Vie Est Belle",
      image:
      "https://images-cdn.ubuy.co.in/634efe372932ca418c5000ed-lancome-la-vie-est-belle-l-eau-de.jpg",
      info: "A sweet and floral fragrance with notes of iris, patchouli, and gourmand.",
      price: 599
    },
    {
      name: "Dolce & Gabbana Light Blue",
      image:
      "https://perfumepalace.in/cdn/shop/products/10026213-1263374754-270000.webp?v=1681886118",
      info: "A fresh and fruity scent with notes of Sicilian lemon, apple, and cedarwood.",
      price: 399
    },
    ];
  return (
    <>
      <div className="bg-[#040404] min-h-screen text-white flex flex-col md:flex-row p-4 md:p-8">
        <div className="mb-8 md:mb-0 md:mr-8">
          <h1 className='text-4xl md:text-7xl font-thin mb-4'>All Products</h1>
          <h2 className='text-xl md:text-2xl mb-2'>To buy any of them</h2>
          <h3 className='text-lg md:text-xl'>Call on: +91-9260967689</h3>
        </div>
        <div className="flex-1 p-4 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {perfumes.map((perfume, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 md:p-6 rounded-lg transform transition-transform duration-500 hover:scale-105 shadow-lg"
              >
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full h-32 md:h-48 object-cover rounded-lg mb-4"
                />
                <div className="info">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">{perfume.name}</h2>
                  <p className="text-sm mb-2">{perfume.info}</p>
                  <p className="text-sm mb-4">Price: ${perfume.price}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Buy now <a href="tel:+91-9260967689"></a>

                    
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Products