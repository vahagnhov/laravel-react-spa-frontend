// components/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 p-4 text-white">
            <nav className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <button className="text-2xl font-bold">Logo</button>
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">
                            <button className="hover:text-gray-300">Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <button className="hover:text-gray-300">Login</button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/register">
                            <button className="hover:text-gray-300">Register</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;