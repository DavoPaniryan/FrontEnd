import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col w-">
            {/* Navbar */}
            <nav className="bg-gray-800 text-white shadow-lg">
                <div className="px-8 py-2 flex justify-between items-center w-full">
                    <div className="text-xl font-bold">Users</div>
                    <div className="space-x-4">
                        <NavLink
                            to={'/'}
                            className="text-gray-300 hover:text-white transition-colors">
                            Books
                        </NavLink>
                        <NavLink
                            to={'/add'}
                            className="text-gray-300 hover:text-white transition-colors">
                            Add Book
                        </NavLink>
                        <NavLink
                            to={'/addAuthor'}
                            className="text-gray-300 hover:text-white transition-colors">
                            Add Author
                        </NavLink>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow bg-gray-100 p-6 w-full">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-2 w-full">
                <p className="text-sm">
                    &copy; 2024 Users App. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Layout;
