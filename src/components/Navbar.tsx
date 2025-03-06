import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-600">MyShop</Link>
                <div className="space-x-4">
                    <Link href="/categories" className="text-gray-700 hover:text-blue-600">Categories</Link>
                    <Link href="/cart" className="text-gray-700 hover:text-blue-600">Cart</Link>
                    <Link href="/auth/login" className="px-4 py-2 bg-blue-500 text-white rounded-md">Login</Link>
                    <Link href="/auth/register" className="px-4 py-2 bg-blue-500 text-white rounded-md">Register</Link>
                </div>
            </div>
        </nav>
    );
}
