import "../styles/Login.css"

export default function Login() {

    return (
        <div className="loginForm">
            <form>
                <input type="text" name="username" id="username" placeholder="Username"/>
                <input type="password" name="password" id="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}