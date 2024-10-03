import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default () => {
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
    <div className="relative bg-zinc-900 py-6">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className='h-96 bg-transparent'
      >
        {perfumes.map((perfume, index) => (
          <SwiperSlide key={index} className='flex justify-center items-center'>
            <div className='flex flex-col items-center'>
              <img src={perfume.image} alt={perfume.name} className='drop-shadow-lg w-full h-auto' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next drop-shadow-2xl"></div>
      <div className="swiper-button-prev drop-shadow-2xl"></div>
    </div>
  );
};