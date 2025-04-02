import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

const images = [
  "https://i.pinimg.com/736x/eb/fa/ed/ebfaedfbb7d95b84947f90af51b28239.jpg",
  "https://i.pinimg.com/736x/77/e8/26/77e826c47de7322793577117750978cc.jpg",
  "https://i.pinimg.com/736x/92/7b/09/927b09a8ec8216636c587783014e98b5.jpg",
  "https://i.pinimg.com/736x/57/e3/04/57e304fae5b93b2d678ac738c1a83048.jpg",
  "https://i.pinimg.com/736x/89/ba/2e/89ba2e01695f8626f9d4fd51f12ef25b.jpg",
  "https://i.pinimg.com/736x/db/be/4d/dbbe4d888831a94e7fb90adc9935edb6.jpg",
  "https://i.pinimg.com/736x/34/b5/8f/34b58f13c003937d2843a1bf8f98fec1.jpg",
  "https://i.pinimg.com/736x/30/75/e7/3075e778811030a0ca4ac0eba9f5e664.jpg",
];

const restaurants = [
  { name: "La Petite Maison", image: "https://i.pinimg.com/736x/9c/66/e9/9c66e992c85b141abb7372cc1cc89a6f.jpg" },
  { name: "Sushi World", image: "https://i.pinimg.com/736x/bb/a4/bb/bba4bbbacb6a776141ff330bd5314df7.jpg" },
  { name: "BBQ Heaven", image: "https://i.pinimg.com/736x/f7/3e/a4/f73ea4bcd553e5c7fe420ee1cbebeb1b.jpg" },
];

const reviews = [
  { name: "John Doe", review: "Thức ăn ngon, không gian đẹp!", image: "https://i.pinimg.com/736x/1e/85/48/1e85486dd0125fa4b3787daf82570923.jpg" },
  { name: "Jane Smith", review: "Dịch vụ tuyệt vời, tôi sẽ quay lại!", image: "https://i.pinimg.com/736x/57/8b/4e/578b4e5f5c49cb7c91de06349721ba82.jpg" },
];

const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80" className="absolute inset-0 w-full h-full object-cover brightness-50" alt="Hero" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold">Epicurean Explorer</h1>
          <p className="text-xl mt-4">Khám phá ẩm thực từ khắp nơi trên thế giới</p>
          <a href="#restaurants" className="mt-6 px-6 py-3 bg-red-600 text-white rounded-full">Khám phá ngay</a>
        </div>
      </section>

      {/* Top Restaurants */}
      <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="my-16 px-6">
        <h2 className="text-3xl font-bold text-center">Top Nhà Hàng Nổi Bật</h2>
        <div className="flex justify-center gap-6 mt-8">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-80 text-center">
              <img src={restaurant.image} className="rounded-lg w-full h-48 object-cover" alt={restaurant.name} />
              <h3 className="mt-4 text-xl font-semibold">{restaurant.name}</h3>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Featured Dishes (Carousel) */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="my-16">
        <h2 className="text-3xl font-bold text-center mb-8">Món Ăn Nổi Bật</h2>
        <Swiper slidesPerView={3} spaceBetween={15} loop autoplay={{ delay: 0, disableOnInteraction: false }} speed={4000} modules={[Autoplay]}>
          {images.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img src={src} className="rounded-lg shadow-md w-[300px] h-[200px] object-cover" alt={`Dish ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* Customer Reviews */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="my-16 px-6">
        <h2 className="text-3xl font-bold text-center">Đánh Giá Khách Hàng Nổi Bật</h2>
        <div className="flex justify-center gap-6 mt-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg w-80 text-center">
              <img src={review.image} className="rounded-full w-16 h-16 mx-auto mb-4" alt={review.name} />
              <p className="italic">"{review.review}"</p>
              <h3 className="mt-2 font-semibold">- {review.name}</h3>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
