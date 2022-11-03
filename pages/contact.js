import {useRouter} from "next/router";
import {useRef, useState} from "react";
import styles from "../pages/contact.module.css"
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


{/*Model des Error Handlings*/
}
const defaultModel = {
    title: "", message: "", email: ""
}

function validateModel(formular) {
    {/*Funktion die überprüft ob die unten angegebene Validierung stimmt, falls nicht erscheint ein Text auf*/
    }
    const errors = {
        title: "", message: "", email: ""
    }
    let isValid = true;

    {/*Falls unter 5 Zeichen*/
    }
    if (formular.title.trim().length < 5) {
        errors.title = "Titel darf nicht < 5 Zeichen sein"
        isValid = false;
    }
    {/*Falls unter 5 Zeichen*/
    }
    if (formular.message.trim().length === null || formular.message.trim().length < 5) {
        errors.message = "Message darf nicht <5 Zeichen sein"
        isValid = false;
    }
    {/*E-Mail nicht leer*/
    }
    if (formular.email.trim().length === 0) {
        errors.email = "E-Mail darf nicht leer sein"
        isValid = false;
    }

    return {errors, isValid}
}

export default function KontaktForm() {
    {/*React Feature. Ist wie ein Navigator, der dich durch das Web navigieren kann*/
    }
    const router = useRouter()
    {/*Getter und Setter im Frontend*/
    }
    const [formular, setFormular] = useState(defaultModel)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(defaultModel)
    {/*Refferenziert auf angegebenes <form>*/
    }

    {/*Falls Änderungen in den Eingabefeldern gemacht werden, werden diese hier entdeckt und die Werte neu gesetzt*/
    }
    const handleChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        setFormular({
            ...formular, [field]: value
        })
    }

    {/*Beim Abschicken des Formulares*/
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors(defaultModel)

        {/*Aufruf Validierungsmethode*/
        }
        const result = validateModel(formular)
        if (!result.isValid) {
            setErrors(result.errors)
            setIsLoading(false)
            return
        }
        {/*Falls Alles ok*/
        }
        if (result.isValid) {
            // Homepage navigation
            alert("Danke für deine Nachricht! Unser Team wird sich frühmöglichst bei dir melden :)")
            router.push("/")
        }
        setIsLoading(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset className={styles.form}>
                    <p>Vor und Nachname*</p>
                    <Form.Control type="text" name="title" onChange={handleChange} value={formular.title} required/>
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

                <button disabled={isLoading}>
                    {isLoading ? "...Loading" : "Submit"}
                </button>
            </form>
        </>
    )
}


