import {useState} from "react";
import styles from "./IndexContent.module.css"

export default function IndexContent() {

    // Boolean Variable mit setter, spezielle react Definition:
    const [expanded, setExpanded] = useState(false)

    // Funktion mithilfe LamdaExpression definiert, expanded wird hier auf das Gegenteil von expanded gesetzt
    const onClick = () => {
        setExpanded(!expanded)
    }

    return (
        <div>
            {/* wenn expanded true ergibt wird, returned was hinter dem Fragezeichen steht. Wenn nicht werden Elemente nach dem Doppelpunkt zurückgegeben */}
            {expanded ? (<div>
                <button className={styles.expandButton} onClick={() => onClick()}>Schliessen ↑</button>
                <div>
                    <h4>Persönliche Beratung und Betreuung an Ort und Stelle</h4>
                    <p>Persönliche Beratung ist uns wichtig: Vom ersten Gespräch über den Abschluss der
                        Versicherung
                        bis hin zum Schadenfall sind wir hier in Spiez für Sie da. Wir kennen das Gebiet, die
                        Menschen
                        und die Mentalität. Denn: Wir leben in der Region und sind ein Bestandteil der lokalen
                        Wirtschaft. In unserer Schadenabteilung erledigen wir neun von zehn Schadenfällen an Ort und
                        Stelle, in eigener Kompetenz, rasch und unkompliziert.</p>
                    <h4>Lehrbetrieb und wichtiger lokaler Auftraggeber</h4>
                    <p>Unsere Generalagentur bildet Lernende aus der Region aus und engagiert sich für eine
                        praxisnahe
                        Ausbildung. Mit Aufträgen ans lokale Gewerbe unterstützen wir den Wirtschaftsstandort
                        Schweiz
                        und übernehmen soziale Verantwortung in der Region.</p>
                    <h4>Genossenschaft mit Erfolgsbeteiligung</h4>
                    <p>Dank genossenschaftlicher Verankerung sind wir in erster Linie Ihnen als Kunden
                        verpflichtet.
                        Mit Auszahlungen aus dem Überschussfonds in Form von Prämienreduktionen lassen wir Sie am
                        Erfolg teilhaben.</p>
                </div>
            </div>) : (<div>              {/* hier wird definiert was passiert wenn der Button geclickt wird */}
                <button className={styles.expandButton} onClick={() => onClick()}>Mehr anzeigen ↓</button>
            </div>)
            }
        </div>
    )
}
