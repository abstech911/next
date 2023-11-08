"use client"
import Link from "next/link";
import styles from './Navbar.module.css'
type LinkType = {
    id: number,
    title: string,
    url: string,
}
const links : LinkType[] = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
] ;

export const Navbar = () => {
    return (
        <nav className={styles.container}>
            <Link href={'/'} className={styles.logo}>Home</Link>
            <div className={styles.links}>
                {links.map((link:LinkType)=> {
                    return (
                        <Link key={`${link.id}`}
                              className={styles.link} href={`${link.url}`}>{link.title}</Link>
                    )
                })}
            </div>
            <button className={styles.logout} onClick={() => console.log('Log out!!!')}>logout </button>
        </nav>
    );
};