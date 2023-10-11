import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";
import kpmg from "../../assets/kpmg-logo.svg";
import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig"

import { LoginButton } from "../../components/LoginButton"

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>Chatli</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Ask a question
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <a href="https://kpmg.com/ch/en/home/services/advisory/management-consulting/advanced-analytics-data-management.html" target={"_blank"} title="Link to KPMG Switzerland Data & Analytics">
                        <img
                            src={kpmg}
                            alt="KPMG logo"
                            aria-label="Link to KPMG Switzerland Data & Analytics"
                            className={styles.kpmgLogo}
                        />
                    </a>

                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
