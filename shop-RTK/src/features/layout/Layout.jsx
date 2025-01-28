import { NavLink, Outlet } from "react-router";
import styles from "./Layout.module.css";

export const Layout = () => {
    return (
        <div className={styles.container}>
            {/* Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.navContent}>
                    <div className={styles.logo}>Users</div>
                    <div className={styles.links}>
                        <NavLink
                            to={'/'}
                            className={({ isActive }) =>
                                isActive ? styles.activeLink : styles.link
                            }>
                            Products
                        </NavLink>
                        <NavLink
                            to={'/product/add'}
                            className={({ isActive }) =>
                                isActive ? styles.activeLink : styles.link
                            }>
                            Add product
                        </NavLink>
                        <NavLink
                            to={'/basket'}
                            className={({ isActive }) =>
                                isActive ? styles.activeLink : styles.link
                            }>
                            Basket
                        </NavLink>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className={styles.mainContent}>
                <Outlet />
            </main>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>&copy; 2024 Users App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;