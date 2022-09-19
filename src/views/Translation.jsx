import { translationAdd } from "../api/translation"
import InputForm from "../components/Translation/InputForm"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"

const Translation = () => {

    const { user, setUser } = useUser()

    const handleTranslation = async (translation) => {
        if (!translation) {
            alert("Nothing to translate..")
            return
        }

        const [ error, updatedUser ] = await translationAdd(user, translation)
        if (error !== null) {
            return
        }

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)

        console.log("Error", error)
        console.log("updatedUser", updatedUser)
    }

    return (
        <>
            <div className="yellow">
                <section id="translation-notes">
                    <InputForm onTranslation={ handleTranslation } />
                </section>
            </div>
            <div className="translate">
            </div>
        </>
    )
}

export default withAuth(Translation)