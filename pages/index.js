import styles from "./index.module.css"
import IndexContent from "@components/IndexContent";

export default function IndexPage() {
    return (
        <div className={styles.text}>
            <div>
                <article role="article">
                    <h1>Generalagentur Spiez</h1>
                    <div>
                        <h2>
                            Versicherung und Vorsorge – in Spiez für Sie da</h2>
                        <p>
                            Seit über 129 Jahren ist die Mobiliar in der Region Spiez kompetente Partnerin
                            für Versicherungen und Vorsorge. Dank genossenschaftlicher Verankerung stehen
                            Sie, liebe Kundinnen und Kunden, bei uns im Zentrum. Deshalb vertrauen mehr als
                            24 000 Menschen auf die Mobiliar in Spiez . Unser Generalagent Bernhard Bigler
                            und seine Mitarbeitenden freuen sich auf Sie.</p>
                    </div>
                </article>
            </div>
            <IndexContent></IndexContent>
        </div>
    )
}