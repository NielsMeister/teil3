import {useRouter} from "next/router";
import {useState} from "react";
import styles from "../pages/contact.module.css"
import Form from 'react-bootstrap/Form';


{/* leeres Model des Formulars in einem Objekt für das Errorhandling */
}
const defaultModel = {
    title: "", message: "", email: ""
}

function validateModel(formular) {
    {/* beim Starten der Überprüfung werden die ErrorMessages auf 'leer' gesetzt */
    }
    const errors = {
        title: "", message: "", email: ""
    }

    {/* boolean für Definition ob Formular valid oder nicht */
    }
    let isValid = true;

    {/* Inhalt wird auf die Länge überprüft, falls unter 5 Zeichen (.trim schneidet die Leerzeichen),
    werden Errors gesetzt und es wird abgelehhnt */
    }
    if (formular.title.trim().length < 5) {
        errors.title = "Titel darf nicht < 5 Zeichen sein"
        isValid = false;
    }

    if (formular.message.trim().length === null || formular.message.trim().length < 5) {
        errors.message = "Message darf nicht <5 Zeichen sein"
        isValid = false;
    }

    if (formular.email.trim().length === 0) {
        errors.email = "E-Mail darf nicht leer sein"
        isValid = false;
    }

    {/* die Ergebnisse werden zurückgegeben */
    }
    return {errors, isValid}
}

export default function KontaktForm() {
    {/* variable zur Navigierung durch die Seiten, spezielles react feature*/
    }
    const router = useRouter()

    const [formular, setFormular] = useState(defaultModel)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(defaultModel)

    {/* Funktion zur Erkennung von Änderungen im Eingabefeld */
    }
    const handleChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        setFormular({
            ...formular, [field]: value
        })
    }

    {/* Überprüfung beim Abschicken des Formulars */
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors(defaultModel)

        {/* Aufruf der ValidierungsFunktion */
        }
        const result = validateModel(formular)
        if (!result.isValid) {
            setErrors(result.errors)
            setIsLoading(false)
            return
        }

        {/* wenn die Resultate ok sind wird ein Alert ausgelöst und auf die LandingPage navigiert */
        }
        if (result.isValid) {
            alert("Danke für deine Nachricht! Unser Team wird sich frühmöglichst bei dir melden :)")
            router.push("/")
        }
        setIsLoading(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset className={styles.form}>
                    <p>Vor und Nachname*</p>
                    <Form.Control type="text" name="title" onChange={handleChange} value={formular.title} required/>
                    {/* bei && werden folgende Elemente nur durchgelassen wenn die vorausgehende Bedingung true ergibt */}
                    {errors.title && <div className={styles.error}>{errors.title}</div>}
                </fieldset>

                <fieldset className={styles.form}>
                    <p>Nachricht*</p>
                    <Form.Control name="message" onChange={handleChange} value={formular.message} required/>
                    {errors.message && <div className={styles.error}>{errors.message}</div>}
                </fieldset>

                <fieldset className={styles.form}>
                    <p>E-Mail*</p>
                    <Form.Control type="email" name="email" onChange={handleChange} value={formular.email} required/>
                    {errors.email && <div className={styles.error}>{errors.email}</div>}
                </fieldset>

                {/* während Ladevorgang wird der Button 'ausgeschaltet' */}
                <button disabled={isLoading}>
                    {isLoading ? "...Loading" : "Submit"}
                </button>
            </form>
        </div>
    )
}


