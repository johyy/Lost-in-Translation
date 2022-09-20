import { useForm} from "react-hook-form"
import { useState } from "react";
import TranslationSummary from "./TranslationSummary";

const InputForm = ({ onTranslation }) => {
    const { register, handleSubmit } = useForm()

    const [ text, setText ] = useState("");

    const onSubmit = ({ translationNotes }) => { 
        onTranslation(translationNotes) 
        setText(translationNotes)
    }

    return (
        <>
            <div className="form_div2">
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <label htmlFor="translation-notes"></label>
                    <input className="input"  type="text" maxLength={40} { ...register('translationNotes') } placeholder='Hello' />
                    <div className="button_div">
                        <button className="submit" type="submit">»</button>
                    </div>
                </form>
            </div>
            <div className="translate">
                <p>
                    <TranslationSummary text={text}/>
                </p>
            </div>
        </>
    )
}

export default InputForm