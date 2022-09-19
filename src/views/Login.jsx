import LoginForm from "../components/Login/LoginForm"

const Login = () => {
    return (
        <>
            <div className="yellow">
                <div className="grid">
                    <div>
                        <img src="img/Logo-Hello.png" alt="hello" className="logo" />
                    </div>
                    <div>
                        <h1 className="login_h1">Lost in Translation</h1>
                        <h3 className="get_started">Get started</h3>
                    </div>
                </div>
            </div>
            <div className="loginbox">
                <LoginForm />
            </div>
        </>
    )
}
export default Login