import { useState } from 'react'
import { useSetUser } from '../../components/Users/UserContext'
import {useHistory} from 'react-router-dom';
import { register } from '../../api'
// import './Register.css';

function Register() {
    const setMe = useSetUser()
    const [userName, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setError] = useState(false)
    const [name, setName] = useState('');
    const [surnames, setSurnames] = useState('');
    const history = useHistory()
    const [city, setCity] = useState('');




    const handleSubmit = async e => {
        e.preventDefault()
        const data = await register(name, surnames, email, userName, password)
        if (data.token) {
            setMe(data)
            history.push('/')
        } else {
            setError(true)
        }
    }

    return (
        <div className="login register">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
            <input type="name" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Surnames:
            <input type="Surnames" value={surnames} onChange={e => setSurnames(e.target.value)} />
                </label>
                <label>
                    Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Username:
            <input value={userName} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    City:
            <input type="city" value={city} onChange={e => setCity(e.target.value)} />
                </label>

                <label>
                    Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                {isError &&
                    <div className="error">
                        Error de registro
            </div>
                }
                <button>Registrar</button>
            </form>
        </div>
    );
}

export default Register;