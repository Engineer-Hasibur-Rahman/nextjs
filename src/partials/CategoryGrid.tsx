// src/components/CategoryGrid.tsx

const categories = [
    { name: "Electronics", imageUrl: "https://images.unsplash.com/photo-1506748686212-1c3f98b10a1f" },
    { name: "Clothing", imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664" },
    { name: "Home & Kitchen", imageUrl: "https://images.unsplash.com/photo-1603052874211-5e522e6fa46c" },
    { name: "Books", imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664" },
];


const CategoryGrid = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Shop by Category</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <div key={category.name} className="relative rounded-lg overflow-hidden">
                            <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                                <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
