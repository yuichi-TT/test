import { useState } from "react";

interface RestaurantPostFormProps {
  addPost: (post: { name: string; description: string; location: string }) => void;
}

const RestaurantPostForm: React.FC<RestaurantPostFormProps> = ({ addPost }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handlePost = () => {
    if (name && description && location) {
      addPost({ name, description, location });
      setName("");
      setDescription("");
      setLocation("");
    }
  };

  return (
    <div className="bg-[#efe2db] p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#1e0907] mb-4">Post a Restaurant</h2>
      <input
        type="text"
        placeholder="Restaurant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border border-[#c8907e] rounded-md focus:ring-2 focus:ring-[#7c160f]"
      />
      <textarea
        placeholder="Restaurant Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-4 py-2 border border-[#c8907e] rounded-md mt-2 focus:ring-2 focus:ring-[#7c160f]"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full px-4 py-2 border border-[#c8907e] rounded-md mt-2 focus:ring-2 focus:ring-[#7c160f]"
      />
      <button
        onClick={handlePost}
        className="w-full bg-[#7c160f] hover:bg-[#bb6f57] text-white font-bold py-2 px-4 rounded-md mt-4 transition duration-300"
      >
        Submit Post
      </button>
    </div>
  );
};

export default RestaurantPostForm;
