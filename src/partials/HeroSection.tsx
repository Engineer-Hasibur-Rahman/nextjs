// src/components/HeroSection.tsx

const HeroSection = () => {
    return (
        <section className="relative w-full h-[300px] sm:h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url("/images/banner.jpg")' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center text-white">
                <div>
                    <h1 className="text-4xl sm:text-6xl font-bold mb-4">Welcome to My Shop</h1>
                    <p className="text-lg sm:text-xl mb-6">Explore the latest trends and exclusive offers.</p>
                    {/*<Link href="/shop" className="px-6 py-3 bg-blue-500 text-white text-xl rounded-md hover:bg-blue-600 transition">Shop Now</Link>*/}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

