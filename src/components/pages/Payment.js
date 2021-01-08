
import { loadStripe } from '@stripe/stripe-js'
import { Redirect, useParams } from "react-router-dom";
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import ExperiencesCard from './ExperiencesCard';
import { useExperience } from "../../api";
import axios from 'axios'
import './Payment.css'
import useFetch from "../../useFetch";
import { useUser } from "../../components/Users/UserContext";
const stripePromise = loadStripe("pk_test_51I0YBEJbuFpI8QouL9S6CtZvxYQ66rSXNQwoyzJmlohxm55E2tSEmx0VEawETu3dCYYdGVVDt8ME6i0XwPaCTH0Q00hLQjzP0H");


const CheckoutForm = () => {

    const { id } = useParams();
    const experiencia = useExperience(id);

    const stripe = useStripe();
    const elements = useElements();
    const me = useUser();
    if (!me) return <Redirect to="/login" />
    if (!experiencia) return 'Loading...'
    const handleSubmit = async (e) => {
        e.preventDefault();


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if (!error) {
            const { id } = paymentMethod;

            const { data } = await axios.post('http://localhost:4000/api/reservations', {
                reservation: id, experiencia: experiencia.id

            }, {
                headers: {
                    'Authorization': `Bearer ${me.token}`
                }


            })
            console.log(data)
        }
    }

    return <form className=" card card-body" onSubmit={handleSubmit}>

        <h1>Ven a disfrutar de nuestras experiencias</h1>
        <ExperiencesCard
            key={experiencia.id}
            id={experiencia.id}
            text={experiencia.description}
            label={experiencia.price}
        />
        <legend>Datos Personales</legend>
        <fieldset>
            <ul>
                <div className="card">
                    <div className="form-group">
                        <label>
                            Nombre
                        <input type="text" autoFocus className="form-control" name="nombre" placeholder="Escribe aqui..." />
                        </label>
                    </div>
                    <div>
                        <label>
                            Apellidos
                        <input type="text" autoFocus className="form-control" name="apellidos" placeholder="Escribe aqui..." />
                        </label>
                    </div>
                    <div>
                        <label>
                            Ciudad
                        <input type="text" autoFocus className="form-control" name="city" placeholder="Escribe aqui..." />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email
                        <input type="email" className="form-control" required next={experiencia.description} />
                        </label>
                    </div>
                    <CardElement className="form-control" />
                </div>
            </ul>
        </fieldset>
        <button className="btn btn-success">
            Buy
        </button>

    </form>
}




function usePayment() {
    const experiencia = useFetch('http://localhost:4000/api/reservations');
    console.log('<<<<<<<', 'hola')
    return (
        <div className='cards'>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    )


}


export default usePayment