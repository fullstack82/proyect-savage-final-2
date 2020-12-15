import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import { useState } from 'react';
import Login from '../pages/Register';
import Register from '../pages/Register'
import { useUser } from './UserContext';
import './Users.css';


function Users() {
    const [isRegister, setIsRegister] = useState(false)

    const me = useUser()
    if (!me) {
        return (
            <div>
                {isRegister ? <Register /> : <Login />}
                <div onClick={() => setIsRegister(!isRegister)} className="toogle">
                    {isRegister ? 'Ya tienes cuenta? Logeate' : 'No tienes cuenta? Registrate'}
                </div>
            </div>
        )
    }
    return (
        <div className="page users">
            <Menu />
            <main>
                <Switch>
                    <Route path="/users/new">
                        Crear usuario
                </Route>
                    <Route path="/">
                        Selecciona un usuario...
                </Route>
                </Switch>
            </main>
        </div>
    );
}

export default Users;

