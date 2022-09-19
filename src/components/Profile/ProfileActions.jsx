import { Link } from "react-router-dom"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"
import { translationClearHistory } from "../../api/translation"

const ProfileActions = ({ logout }) => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm("Are you sure?")) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistoryClick = async () => {
        if (!window.confirm("Are you sure?\nThis can not be undone!")) {
            return
        }

        const [ clearError ] = await translationClearHistory(user.id)

        if (clearError !== null) {
            return
        }

        const updatedUser = {
            ...user,
            translations: []
        }

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
      
    }

    return (
        <ul className="buttons">
            <li>
                <button className="button_function" onClick={ handleLogoutClick }>Logout</button>
            </li>
            <li>
                <button className="button_function" onClick={ handleClearHistoryClick }>Clear history</button>
            </li>
        </ul>
    )
}
export default ProfileActions