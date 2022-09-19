import { useEffect } from "react"
import { userById } from "../api/user"
import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"

const Profile = () => {

    const { user, setUser } = useUser()

    useEffect(() => { (async function() {
            const [ error, latestUser ] = await userById(user.id)

            if (error == null) {
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        })()
    }, [ setUser, user.id ])


    return (
        <>
            <div className="yellow bigger">
                <ProfileHeader username={ user.username } />
                <ProfileActions />
            </div>
            <div className="translations_box">
                <ProfileTranslationHistory translations={ user.translations } />
            </div>
        </>
    )
}
export default withAuth(Profile)