//stylesheet einbinden
import styles from "./Footer.module.css"

//Component zugänglich machen
export default function Footer() {

    //durch React Framework spezielle Art von Html (JSX) innerhalb von Javascript zurückgeben
    return (
        /* einfacher Html Code, Rückgabewert muss immer in 1 Element verpackt sein */
        <div className={styles.footer}>
            {/* Klassennamen vergeben um im Stylesheet anzusprechen */}
            <div className={styles.content}>
                <div>
                    {/* mithilfe von <a> tag Verlinkung zum Kontaktformular erstellen */}
                    <h5 className={styles.footerLink}><a href={"/contact"}>Kontaktieren Sie uns:</a></h5>
                </div>
                <div className={styles.listContainer}>
                    {/* einfache ungeordnete Liste mit Elementen */}
                    <ul className={styles.contacts}>
                        <lI>Telefon: 033 456 78 90</lI>
                        <li>Email: gaspiez@mobi.ch</li>
                        <li>Adresse: Oberlandstrasse, 3700 Spiez</li>
                    </ul>
                </div>
                <div></div>
                <div>
                    <h5 className={styles.footerLink}><a href={"/impressum"}>Impressum</a></h5>
                </div>
            </div>
        </div>
    )
}