import styles from '@/styles/Footer.module.css';
import withNavbar from './withNavbar';

const Footer = () => {
    return ( 
    <section className={styles.main}>
        <div className={styles.links}>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/abrahamjchoi/" target="_blank">LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/abechoi" target="_blank">Github</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/ac_and_ai/" target="_blank">Instagram</a>
                </li>
                <li>
                    <a href="https://acandai.etsy.com/" target="_blank">Etsy</a>
                </li>
            </ul>
        </div>
        <hr />
        <div>
            <p>Abraham Choi Government Contracting LLC</p>
            <p>Based in California</p>
        </div>
    </section> 
    );
}
 
export default withNavbar(Footer);