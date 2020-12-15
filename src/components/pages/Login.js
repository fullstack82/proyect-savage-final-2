import { useState } from 'react'
import { useSetUser } from '../../components/Users/UserContext'
import { login } from '../../api'
import { useHistory } from 'react-router-dom';
import './Login.css';



function Login() {
    const setMe = useSetUser()
    const history = useHistory()
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isError, setError] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        const data = await login(userName, password, email)
        if (data.token) {
            setMe(data)
            history.push('/')
        } else {
            setError(true)
        }
    }

    return (

        <div className="login">

            <form className="login-form" onSubmit={handleSubmit}>

                <label >
                    UserName:
            <input className='userName' value={userName} placeholder='Write your name...' onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
            <input className='password' type="password" value={password} placeholder='Enter your password...' onChange={e => setPassword(e.target.value)} />
                </label>
                <label  >
                    Email:
            <input className='email' type="email" value={email} placeholder='Enter your email...' onChange={e => setEmail(e.target.value)} />
                </label>
                {isError &&
                    <div className="error">
                        Usuario o contraseña incorrecto
            </div>

                }
                <button>Sign Up</button>

            </form>

        </div>
    );
}

export default Login;
