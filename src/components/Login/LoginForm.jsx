import { useForm } from 'react-hook-form'

const usernameConfig = {
    required: true,
    minLength: 2
}

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    console.log(errors)

    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }

        if (errors.username.type === 'required') {
            return <span> Username is required</span>
        }

        if (errors.username.type === 'minLength') {
            return <span> Username is too short (min 2 characters)</span>
        }
    })()

    return (
        <>
            <h2>Get started</h2>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <label htmlFor="username"></label>
                    <input 
                        type="text"
                        placeholder="What's your name?"
                        { ...register("username", usernameConfig)} />
                { errorMessage }
                </fieldset>
                <button type="submit">-></button>
            </form>
        </>
    )
}
export default LoginForm