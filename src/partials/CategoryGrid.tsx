const categories = [
    { name: "Electronics", image: "/images/electronics.jpg" },
    { name: "Fashion", image: "/images/fashion.jpg" },
    { name: "Home & Kitchen", image: "/images/home.jpg" },
    { name: "Sports", image: "/images/sports.jpg" },
];

export default function CategoryGrid() {
    return (
        <section className="container mx-auto py-10">
            <h2 className="text-2xl font-bold text-center mb-6">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
                        <img src={category.image} alt={category.name} className="w-full h-32 object-cover rounded-md" />
                        <h3 className="mt-2 font-semibold">{category.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
