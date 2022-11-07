import styles from "./index.module.css"
import Carousel from "react-bootstrap/Carousel";
import Table from "react-bootstrap/Table";

{/* BildgallerieKomponent importieren */
}

export default function IndexPage() {
    return (
        <div className={styles.visitMain}>
            <div className={styles.text}>
                <h1>Unser Besuch</h1>
                <p>Am 29.08.2022 hatten Niels Meister und Valmir Halimaji die Möglichkeit einen Tag auf der
                    Generalagentur in Spiez verbringen, hier ein kurzer Rückblick:</p>
            </div>
            <div className={styles.carouselContainer}>
                {/* Einsetzen des Bootstrap BildgalleriKomponent*/}
                <Carousel className={styles.carouselItem}>
                    {/* einzelne Elemente des Slideshows mit Bild definieren */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/carousel/image1.jpeg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/carousel/image2.jpeg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/carousel/image3.jpeg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/carousel/image4.jpeg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/carousel/image5.jpeg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <h1>Tagesablauf</h1>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Zeit</th>
                        <th>Tätigkeiten Halimaji Valmir</th>
                        <th>Tätigkeiten Meister Niels</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>08:15</td>
                        <td>Ankunft bei der GA Spiez</td>
                        <td>Ankunft bei der GA Spiez</td>
                    </tr>
                    <tr>
                        <td>08:30</td>
                        <td>Kurzer Rundgang durch das Gebäude</td>
                        <td>Kurzer Rundgang durch das Gebäude</td>
                    </tr>
                    <tr>
                        <td>09:15</td>
                        <td>Einführung ins b2e Portal mit Kilian</td>
                        <td>Sortieren von Post mit Alessia</td>
                    </tr>
                    <tr>
                        <td>10:30</td>
                        <td>Selbständig offene Fälle bearbeiten im b2e mit Kilian</td>
                        <td>
                            Schadenfälle mit Garagen koordinieren (telefonieren /
                            Mailverkehr)
                        </td>
                    </tr>
                    <tr>
                        <td>12:00</td>
                        <td>Mittagspause</td>
                        <td>Mittagspause</td>
                    </tr>
                    <tr>
                        <td>12:45</td>
                        <td>Re-Organisierung des Resourcen Raums</td>
                        <td>Re-Organisierung des Resourcen Raums</td>
                    </tr>
                    <tr>
                        <td>13:30</td>
                        <td>Mailverkehr bearbeiten</td>
                        <td>
                            Aktualisierung von Bezieungsstaten mit Kunden im b2e / elan
                        </td>
                    </tr>
                    <tr>
                        <td>14:30</td>
                        <td>Beratung zu Autoversicherung (persönlicher Kundenkontakt)</td>
                        <td>
                            Organisation und Koordination von Mobiliar-interner Rollerdisco
                        </td>
                    </tr>
                    <tr>
                        <td>15:30</td>
                        <td>Übergabe von Dankesgeschenke</td>
                        <td>Übergabe von Dankesgeschenke</td>
                    </tr>
                    <tr>
                        <td>16:00</td>
                        <td>Aufbrechen nach Köniz</td>
                        <td>Aufbrechen nach Uetendorf</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}