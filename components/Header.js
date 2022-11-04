import styles from "./Header.module.css"

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                {/* selbstschliessender <img/> tag für Bilder, in src="" wird der relative Dateipfad angegeben */}
                <img src={"/header-ga-spiez.png"} alt={"Image of Spiez"} className={styles.headerImage}/>
            </header>
            {/* Navigation mit Verlinkung zu den jeweiligen Seiten, href="" bezieht sich auf Dateipfad der Files */}
            <nav className={styles.nav} id={"nav"}>
                <div><a href={"/"}>
                    <div>Home</div>
                </a></div>
                <div><a href={"/visit"}>
                    <div>Unser Besuch</div>
                </a></div>
                <div><a href={"/impressum"}>
                    <div>Impressum</div>
                </a></div>
            </nav>
        </>
    )
}