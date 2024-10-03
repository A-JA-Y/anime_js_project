import React from "react";

function PerfumesComp() {
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
    },
    {
      name: "Gucci Bloom",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgOhrst1MR-FbB2i8mf8AGzMbUMUhyOjhnw&s",
      info: "A floral fragrance with notes of jasmine, tuberose, and Rangoon creeper.",
    },
    {
      name: "Tom Ford Black Orchid",
      image:
        "https://bellegirllifestyle.com/cdn/shop/products/Tom-Ford-Black-Orchid-Eau-De-Parfum-Spray-100ml-for-women-online-on-deobazaar_800x.jpg?v=1679905340",
      info: "A luxurious and sensual fragrance with dark and rich notes.",
    },
    {
      name: "Yves Saint Laurent Black Opium",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/61xjYK+FiIL._AC_UL600_SR600,600_.jpg",
      info: "A seductive scent with notes of coffee, vanilla, and white flowers.",
    },
    {
      name: "Jo Malone London Lime Basil & Mandarin",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/9/9/99827f0690251081035.jpg",
      info: "A fresh and zesty fragrance with notes of lime, basil, and mandarin.",
    },
    {
      name: "Marc Jacobs Daisy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQWs8k_1iHnprWvHH7148Dv7eryN205074g&s",
      info: "A light and airy floral fragrance with notes of strawberry, violet leaves, and jasmine.",
    },
    {
      name: "Versace Bright Crystal",
      image:
        "https://lh6.googleusercontent.com/proxy/Zvuw-6-hbymR0GpIHaLZChJ7KZjmcAB_ZjxarP1Qe88lcs556xRRoStNwjnNNUhspqetcQpb-vj-lcv3HrhaRM7IyI1YMf04hU195JE6l93xJIba29rRp8kwbjnXdI-fQbscM_4ssLSC9CVSuYJSYbStltX8DLIwRmh8meaBCw",
      info: "A fresh and vibrant scent with notes of pomegranate, peony, and magnolia.",
    },
    {
      name: "Lancome La Vie Est Belle",
      image:
        "https://images-cdn.ubuy.co.in/634efe372932ca418c5000ed-lancome-la-vie-est-belle-l-eau-de.jpg",
      info: "A sweet and floral fragrance with notes of iris, patchouli, and gourmand.",
    },
    {
      name: "Dolce & Gabbana Light Blue",
      image:
        "https://perfumepalace.in/cdn/shop/products/10026213-1263374754-270000.webp?v=1681886118",
      info: "A fresh and fruity scent with notes of Sicilian lemon, apple, and cedarwood.",
    },
  ];

  return (
    <div className="bg-black flex flex-col justify-center items-center py-5 w-full">
      <h1 className="text-center text-white text-3xl mb-5">Perfumes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
        {perfumes.map((perfume, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={perfume.image}
              className="w-full h-64 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
              alt={perfume.name}
            />
            <div className="p-4">
              <h5 className="text-xl font-semibold">{perfume.name}</h5>
              <p className="text-gray-700">{perfume.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PerfumesComp;
