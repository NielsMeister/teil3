import styles from "./index.module.css"

export default function ImpressumPage() {
    return (
        <div className={styles.text}>
            <div className={styles.impressumContainer}>
                <div className={styles.listContainer}>
                    <h4>Kontaktdaten:</h4>
                    <ul className={styles.contacts}>
                        <lI>Telefon: 033 456 78 90</lI>
                        <li>Email: gaspiez@mobi.ch</li>
                        <li>Adresse: Oberlandstrasse, 3700 Spiez</li>
                    </ul>
                </div>
                <div className={styles.contactContainer}>
                    <div className={styles.contactLink}>
                        <h5 className={styles.footerLink}><a href={"/contact"}>Kontaktieren Sie uns:</a></h5>
                    </div>
                </div>
            </div>
            <div>
                <h3>Unser Team:</h3>
                <img src="/carousel/image1.jpeg" alt="picture of team" className={styles.teamImage}/>
            </div>
        </div>
    )
}