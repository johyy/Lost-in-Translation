import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {

    const translationList = translations.slice(-10).map(
        (translation, index) => <ProfileTranslationHistoryItem key={ index + "-" + translation } translation={ translation } />)

    return (
        <section>
            <h2 className="translation_history">Your translation history:</h2>
            { translationList.length === 0 && <p className="no_translations">You have no translations yet.</p>}
            <ul>{ translationList }</ul>
        </section>
    )
}

export default ProfileTranslationHistory