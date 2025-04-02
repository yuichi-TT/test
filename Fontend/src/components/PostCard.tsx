interface PostCardProps {
  post: {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    image: string;
    likes: number;
    comments: string[];
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-[#efe2db] rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6">
      {/* Hiển thị ảnh bài đăng */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      
      {/* Tiêu đề và nội dung bài đăng */}
      <h3 className="text-2xl font-bold text-[#1e0907]">{post.title}</h3>
      <p className="text-[#1e0907] mt-2">{post.content}</p>
      
      {/* Hiển thị lượt thích */}
      <div className="mt-4 text-[#7c160f] text-sm">
        <strong>{post.likes} Likes</strong>
      </div>

      {/* Hiển thị bình luận */}
      <div className="mt-2">
        <strong>Comments:</strong>
        <ul className="list-disc pl-5 text-[#1e0907]">
          {post.comments.map((comment, index) => (
            <li key={index} className="text-sm">{comment}</li>
          ))}
        </ul>
      </div>

      {/* Thông tin tác giả và ngày đăng */}
      <div className="mt-4 border-t pt-4 text-[#7c160f] text-sm">
        <p>Written by: <span className="font-medium text-[#1e0907]">{post.author}</span></p>
        <p className="mt-1">{post.date}</p>
      </div>
    </div>
  );
};

export default PostCard;
