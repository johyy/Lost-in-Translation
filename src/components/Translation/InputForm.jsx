import { useForm} from "react-hook-form"
import { useState } from "react";
import TranslationSummary from "./TranslationSummary";

const InputForm = ({ onTranslation }) => {
    const { register, handleSubmit } = useForm()
    const [ text, setText ] = useState("");

    const onSubmit = ({ translationNotes }) => { 
        onTranslation(translationNotes) 
        setText(translationNotes)
        //console.log(typeof(text))

    }

    return (
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <label htmlFor="translation-notes"></label>
                    <input type="text" { ...register("translationNotes")} placeholder="Hello" />
                    <button type="submit">Translation</button>
                    <p>
                        <TranslationSummary text={text}/>
                    </p>
                </fieldset>
            </form>
        </>

    )
}

export default InputForm