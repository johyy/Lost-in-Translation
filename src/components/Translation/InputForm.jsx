import { useForm} from "react-hook-form"

const InputForm = ({ onTranslation }) => {
    const { register, handleSubmit } = useForm()

    const onSubmit = ({ translationNotes }) => { onTranslation(translationNotes) }

    return (
        <div className="form_div2">
            <form onSubmit={ handleSubmit(onSubmit) }>
                <label htmlFor="translation-notes"></label>
                <input className="input"  type="text" maxLength={40} { ...register('translationNotes') } placeholder='Hello' />
                <div className="button_div">
                    <button className="submit" type="submit">»</button>
                </div>
            </form>
        </div>
    )
}

export default InputForm