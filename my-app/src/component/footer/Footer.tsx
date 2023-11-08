import Image from "next/image";
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.container}>
            <div>@2023 Lamina All right reserved</div>
            <div>
                <Image src="" alt=""  />
            </div>
        </footer>
    );
};