import RestaurantCard from "./RestaurantCard";

const Restaurants: React.FC = () => {
  return (
    <section id="restaurants" className="py-16 bg-[#efe2db]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1e0907]">Featured Restaurants</h2>
          <p className="text-[#1e0907] max-w-2xl mx-auto text-xl">
            Discover exceptional restaurants from around the world, offering traditional and unique cuisine.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RestaurantCard
            image="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2"
            alt="Italian Restaurant"
            country="Italy"
            name="La Trattoria"
            description="Authentic Italian dishes featuring pasta, pizza, and risotto."
            location="Rome, Italy"
            rating={4.8}
          />
          <RestaurantCard
            image="https://images.unsplash.com/photo-1546039907-7fa05f864c02"
            alt="Japanese Restaurant"
            country="Japan"
            name="Sakura Sushi"
            description="Fresh sushi and sashimi in a traditional setting."
            location="Tokyo, Japan"
            rating={4.9}
          />
          <RestaurantCard
            image="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a"
            alt="French Restaurant"
            country="France"
            name="Le Petit Bistro"
            description="Exquisite French cuisine paired with fine wines."
            location="Paris, France"
            rating={4.7}
          />
        </div>
      </div>
    </section>
  );
};

export default Restaurants;
