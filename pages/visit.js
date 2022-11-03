import styles from "./index.module.css"

{/* BildgallerieKomponent importieren */
}
import Carousel from "react-bootstrap/Carousel";

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
                <div className={styles.text}>
                    <p>Ill tell you how I feel about school, Jerry. Its a waste of time. Bunch of people runnin around
                        bumpin into each other, got a guy up front says, 2 + 2, and the people in the back say, 4. Then
                        the bell rings and they give you a carton of milk and a piece of paper that says you can go take
                        a dump or somethin. I mean, its not a place for smart people, Jerry. I know thats not a popular
                        opinion, but thats my two cents on the issue. Well, shes my daughter, Summer. I outrank you. Or,
                        family means nothing, in which case, dont play that card. Really, youre gonna pull that move? I
                        guided your entire civilisation. Your people have a holiday named ricksgiving. They teach kids
                        about me in school. The algorithm learns your preferences better that way. Plus, if you get in
                        kind of a cool enough relationship, you can sort of follow each other and check out each others
                        kinks, you know?
                    </p><p>

                    We dont whitewash it either, Morty. I mean, the pirates are really rapey. Who cares, Morty?
                    Global acts of terrorism happen every day. Uh, heres something thats never happened before—Im a
                    pickle! Im Pickle Ri-i-i-ick! Summer, next time were hiding in a chlorkian echo nest, can you do
                    me a favour and turn your ringer off?! Im man enough to simply say, Im going to poop, and Id be
                    honored to have Ron Howard involved.
                    Rikitikitavi, bitch! Grassss... Taste bad! I aint better than shit, Jack! Dont mind those stare
                    goblins.
                </p>
                    <h3>Cantaloupe</h3>
                    <p>
                        Countries known for their sexually aggressive men. I dont like it here Morty. I cant abide
                        bureaucracy. I dont like being told where to go and what to do. I consider it a violation. Did
                        you
                        get those seeds all the way up your butt? I was just killing some snaked up here like everyone
                        else,
                        I guess, and finishing the Christmas lights. This is because you give Morty Smith bad grades,
                        bitch!

                        And thats the wayyy, the news goes! Plutos a planet. Oh, were welllll past that, Jerry! I was
                        just
                        killing some snaked up here like everyone else, I guess, and finishing the Christmas lights.
                    </p><p>
                    I dunno, some people would pay top dollar for that kind of breakthrough. I couldnt hear you over my
                    own screaming. Weve talked about this! Ill tell you how I feel about school, Jerry. Its a waste of
                    time. Bunch of people runnin around bumpin into each other, got a guy up front says, 2 + 2, and the
                    people in the back say, 4. Then the bell rings and they give you a carton of milk and a piece of
                    paper that says you can go take a dump or somethin. I mean, its not a place for smart people, Jerry.
                    I know thats not a popular opinion, but thats my two cents on the issue. Well he roped me into this!

                    Yes. Hes a getaway driver with Aspergers and my butthole is a demolitions expert. Want to piss on
                    him? I took your family? Who do you think had taken more from them when you shot 2 Wow I really
                    crononbergd up the whole place huh Morty, just a bunch a cronenbergs walkin around.
                </p><p>
                    Well let me check my list of powers and weaknesses: ability to do anything, but only whenever I
                    want. Yeah, that sounds like a job for me. Nice one, Ms Pancakes. Id like to order one large phone
                    with extra phones please. cell phone, no no no rotary... and payphone on half. Burgertime!</p>
                </div>
            </div>
        </div>
    )
}