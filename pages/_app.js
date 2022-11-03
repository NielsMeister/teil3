{/* importieren der Komponente */
}
import Header from "@components/Header"
import useSession from "@lib/session"
import "bootstrap/dist/css/bootstrap.min.css"
import SSRProvider from 'react-bootstrap/SSRProvider'
import "./_app.css"
import Footer from "@components/Footer";

{/* allgemeine Definition für das Erkennen und Anzeigen von Components und pageProps */
}
export default function App({Component, pageProps}) {

    {/* initialisiert die Session */
    }
    const session = useSession()
    {/* newPageProps mit dem Wert der alten, inklusive Session */
    }
    const newPageProps = {
        ...pageProps,
        session
    }
    return (
        <div>
            {/* Header ist ein sogenannter "custom tag", dieser wurde zuvor als Component definiert, exportiert, importiert und hier verwendet */}
            <Header>
            </Header>
            {/* hier werden die pageProps in die page geladen */}
            <main className="page">
                <SSRProvider>
                    <Component {...newPageProps} />
                </SSRProvider>
            </main>
            <Footer>
            </Footer>
        </div>
    )
}