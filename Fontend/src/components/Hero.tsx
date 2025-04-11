import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

interface Restaurant {
  name: string;
  image_url: string;
}

interface Post {
  title: string;
  content: string;
  image_url: string;
  user: {
    fullname: string;
    avatar: string;
  };
}

const HomePage = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Gọi dữ liệu nhà hàng
    axios.get("http://localhost:8080/api/v1/restaurants")
      .then((res) => setRestaurants(res.data.data.restaurants))
      .catch((err) => console.error("Lỗi khi lấy restaurants:", err));

    // Gọi dữ liệu bài viết
    axios.get("http://localhost:8080/api/v1/posts")
      .then((res) => setPosts(res.data.data.posts))
      .catch((err) => console.error("Lỗi khi lấy posts:", err));
  }, []);

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

      {/* Nhà hàng nổi bật */}
      <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="my-16 px-6">
        <h2 className="text-3xl font-bold text-center">Top Nhà Hàng Nổi Bật</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-80 text-center">
              <img src={restaurant.image_url} className="rounded-lg w-full h-48 object-cover" alt={restaurant.name} />
              <h3 className="mt-4 text-xl font-semibold">{restaurant.name}</h3>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Món ăn nổi bật (dùng hình ảnh bài viết nếu muốn) */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="my-16">
        <h2 className="text-3xl font-bold text-center mb-8">Món Ăn Nổi Bật</h2>
        <Swiper slidesPerView={3} spaceBetween={15} loop autoplay={{ delay: 0, disableOnInteraction: false }} speed={4000} modules={[Autoplay]}>
          {posts.map((post, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img src={post.image_url} className="rounded-lg shadow-md w-[300px] h-[200px] object-cover" alt={`Post ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* Đánh giá khách hàng (từ user trong bài viết) */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="my-16 px-6">
        <h2 className="text-3xl font-bold text-center">Đánh Giá Khách Hàng Nổi Bật</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg w-80 text-center">
              <img src={post.user?.avatar || "https://via.placeholder.com/50"} className="rounded-full w-16 h-16 mx-auto mb-4" alt={post.user?.fullname} />
              <p className="italic">"{post.content}"</p>
              <h3 className="mt-2 font-semibold">- {post.user?.fullname}</h3>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
