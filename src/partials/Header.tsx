// src/components/Header.tsx

import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">My Shop</Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                        <li><Link href="/shop" className="hover:text-blue-400">Shop</Link></li>
                        <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
