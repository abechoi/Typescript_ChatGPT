import styles from '@/styles/Services.module.css';
import withNavbar from './withNavbar';

const Services = () => {
    return (  
        <section className={styles.main} id='services'>
            <div>
                <h1>SERVICES</h1>
            </div>
            <hr />
            <div className={styles.services}>
                <div>
                    <h2>
                    Print on Demand Products
                    </h2>
                    <hr />
                    <p>
                    Boost your agency's identity with our high-quality, customized bulk products featuring logos and branding. We prioritize timely delivery, ensuring your branded items are ready when needed. Trust us to provide exceptional merchandise to represent your government agency.                    </p>
                </div>
                <div>
                    <h2>
                    Government Graphic Designs
                    </h2>
                    <hr />
                    <p>
                    Elevate your government agency's advertising and marketing efforts with our targeted graphic designs. Our talented designers create striking visuals to communicate your message effectively and promote your agency's initiatives. Let us help you capture attention and drive results.                    </p>
                    </div>
                <div>
                    <h2>
                    Digital Artwork on Canvas
                    </h2>
                    <hr />
                    <p>
                    Upgrade your government office spaces with our captivating digital artwork, designed for canvas printing, framing, and shipping. Our artists craft pieces that reflect your agency's values and mission. Trust us to deliver exceptional artwork that enhances your work environment.                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default withNavbar(Services);