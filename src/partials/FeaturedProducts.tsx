const products = [
    { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
    { id: 2, name: "Running Shoes", price: "$89", image: "/images/shoes.jpg" },
    { id: 3, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
];

export default function FeaturedProducts() {
    return (
        <section className="container mx-auto py-10">
            <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                        <h3 className="mt-2 font-semibold">{product.name}</h3>
                        <p className="text-gray-600">{product.price}</p>
                        <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg">Add to Cart</button>
                    </div>
                ))}
            </div>
        </section>
    );
}
