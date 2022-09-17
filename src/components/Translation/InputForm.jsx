import { useForm} from "react-hook-form"

const InputForm = ({ onTranslation }) => {
    const { register, handleSubmit } = useForm()

    const onSubmit = ({ translationNotes }) => { onTranslation(translationNotes) }

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <fieldset>
                <label htmlFor="translation-notes"></label>
                <input type="text" { ...register("translationNotes")} placeholder="Hello" />
            </fieldset>

            <button type="submit">Translation</button>
        </form>
    )
}

export default InputForm