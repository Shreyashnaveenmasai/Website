function Header() {
    return (
        <header className="bg-gray-900 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-bold">TechSolutions</a>
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-blue-400">Home</a>
                    <a href="#" className="hover:text-blue-400">Services</a>
                    <a href="#" className="hover:text-blue-400">About</a>
                    <a href="#" className="hover:text-blue-400">Blog</a>
                    <a href="#" className="hover:text-blue-400">Contact</a>
                </nav>
                <div className="hidden md:flex items-center bg-gray-800 rounded-lg px-3 py-1">
                    <input type="text" placeholder="Search..." className="bg-transparent text-white outline-none" />
                    <button className="ml-2 text-gray-400 hover:text-white">
                        🔍
                    </button>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="hover:text-blue-400">📘</a> {/* Facebook */}
                    <a href="#" className="hover:text-blue-400">🐦</a> {/* Twitter */}
                    <a href="#" className="hover:text-blue-400">🔗</a> {/* LinkedIn */}
                </div>
                <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 hidden md:block">
                    Get Started
                </button>
                <button className="md:hidden text-white focus:outline-none">
                    ☰
                </button>
            </div>
        </header>
    );
}

export default Header;
