import { useState } from "react";
import { motion } from "framer-motion";
import PostCard from "./PostCard";
import PostForm from "./PostForm";
import { FaHeart, FaComment } from "react-icons/fa"

const Post: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Amazing Sushi in Tokyo",
      content: "Visited an incredible sushi restaurant, totally worth it!",
      author: "John Doe",
      date: "2025-03-15",
      image: "https://i.pinimg.com/736x/76/54/7b/76547b4e8b23e0ddf4a58beff6782c9c.jpg",
      likes: 10,
      comments: ["Looks delicious!", "I want to try it!"]
    },
    {
      id: 2,
      title: "Napoli Pizza Experience",
      content: "Best pizza I have ever had in Italy!",
      author: "Jane Smith",
      date: "2025-03-10",
      image: "https://i.pinimg.com/736x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg",
      likes: 8,
      comments: ["Wow! That looks tasty."]
    },
    {
      id: 3,
      title: "Traditional Ramen in Kyoto",
      content: "Had the most authentic ramen in Kyoto. Highly recommend it!",
      author: "Alice Brown",
      date: "2025-03-05",
      image: "https://i.pinimg.com/736x/f3/31/6f/f3316f3bb9d659ee7f7d8981af61a29f.jpg",
      likes: 12,
      comments: ["I love ramen!", "I need to visit Kyoto!"]
    },
    {
      id: 4,
      title: "Tacos in Mexico City",
      content: "The tacos in Mexico City were incredible. Truly authentic!",
      author: "Bob Green",
      date: "2025-02-25",
      image: "https://i.pinimg.com/736x/f5/20/10/f52010f1acafbe3969cc567c41d44865.jpg",
      likes: 15,
      comments: ["Tacos are life!", "This looks amazing!"]
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleAddPost = (newPost: { title: string; content: string; image: string }) => {
    setPosts([
      ...posts,
      { 
        ...newPost, 
        id: posts.length + 1, 
        likes: 0, 
        comments: [], 
        author: "Anonymous",
        date: new Date().toISOString().split("T")[0], 
        image: newPost.image || "https://source.unsplash.com/400x300/?food" // Nếu không có ảnh, dùng ảnh mặc định
      }
    ]);
    setShowForm(false);
  };

  return (
    <div className="bg-[#efe2db] min-h-screen text-[#1e0907]">
      <div className="container mx-auto py-10 px-4">
        
        {/* Nút "Add Post" cố định */}
        <button
          className="fixed top-20 left-5 bg-[#7c160f] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#bb6f57]"
          onClick={() => setShowForm(true)}
        >
          + Add Post
        </button>

        {/* Hiển thị form khi click nút "Add Post" */}
        {showForm && <PostForm onAddPost={handleAddPost} onClose={() => setShowForm(false)} />}

        {/* Các bài post */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {posts.map((post) => (
            <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <PostCard post={post} />
            <div className="flex justify-end items-center mt-2 space-x-4">
              <button className="flex items-center text-red-500 hover:text-red-700">
                <FaHeart className="mr-1" /> {post.likes}
              </button>
              <button className="flex items-center text-blue-500 hover:text-blue-700">
                <FaComment className="mr-1" /> {post.comments.length}
              </button>
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
