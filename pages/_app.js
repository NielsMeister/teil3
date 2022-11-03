import Header from "@components/Header"
import useSession from "@lib/session"
import "bootstrap/dist/css/bootstrap.min.css"
import SSRProvider from 'react-bootstrap/SSRProvider'
import "./_app.css"
import Image from "next/image";
import Footer from "@components/Footer";

export default function App({ Component, pageProps }) {
    const session = useSession()
    const newPageProps = {
        ...pageProps,
        session
    }
    return (
        <>
            <Header>
            </Header>
            <main className="page">
                <SSRProvider>
                    <Component {...newPageProps} />
                </SSRProvider>
            </main>
            <Footer>
            </Footer>
        </>
    )
}