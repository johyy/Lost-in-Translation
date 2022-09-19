import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/user';
import { storageSave } from '../../utils/storage';
import { useNavigate} from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from '../../const/storageKeys';

const usernameConfig = {
    required: true,
    minLength: 2
}

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, setUser } = useUser()
    const navigate = useNavigate()

    const [ loading, setLoading ] = useState(false)
    const [ apiError, setApiError ] = useState(null)

    useEffect(() => {
        if (user !== null) {
            navigate('translation')
        }
    }, [ user, navigate ])

    const onSubmit = async ({ username }) => {
        setLoading(true)
        const [ error, userResponse ] = await loginUser(username)
        if (error !== null) {
            setApiError(error)
        }
        if (userResponse  !== null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
        setLoading(false)
    }

    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }

        if (errors.username.type === 'required') {
            return <span className="username"> Username is required</span>
        }

        if (errors.username.type === 'minLength') {
            return <span className="username"> Username is too short (min 2 characters)</span>
        }
    })()

    return (
        <>  
        <div className="form_div">
            <form onSubmit={ handleSubmit(onSubmit) }>
                    <label hidden htmlFor="username">Username: </label>
                    <input className="input" type="text" placeholder="What's your name?" maxLength={15}{ ...register("username", usernameConfig)} />
                 
                    <div className="button_div">
                 <button className="submit" type="submit" disabled={ loading }>»</button>
                 </div>
                 { errorMessage }
                 { loading && <p className='username'>Logging in...</p>}
                 { apiError && <p>{ apiError }</p>}
            </form>
            </div>
        </>
    )
}
export default LoginForm