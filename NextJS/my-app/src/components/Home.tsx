import styles from '@/styles/Home.module.css';
import withNavbar from './withNavbar';

const Home = () => {
    return (  
        <section className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.banner}>
                    <div className={styles.row}>
                        <h1>ABRAHAM</h1>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <h1>CHOI</h1>
                        </div>
                        <div className={styles.col}>
                            <h2>Government</h2>
                            <h2>Contracting</h2>
                        </div>
                    </div>
                </div>
                    <hr/>
                <div className={styles.message}>
                    <p>Get fast delivering exceptional services with unparalleled quality and efficiency in every project, ensuring the success of our clients' missions.</p>
                </div>
            </div>
            <img src={`/hero.png`} alt='hero'></img>
        </section>
    );
}
 
export default withNavbar(Home);