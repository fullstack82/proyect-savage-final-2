
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import ExperiencesCard from './ExperiencesCard';
import axios from 'axios'
import './Payment.css'
import useFetch from "../../useFetch"

const stripePromise = loadStripe("pk_test_51I0YBEJbuFpI8QouL9S6CtZvxYQ66rSXNQwoyzJmlohxm55E2tSEmx0VEawETu3dCYYdGVVDt8ME6i0XwPaCTH0Q00hLQjzP0H");


const CheckoutForm = () => {
    
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (e) => {
        e.preventDefault();


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if (!error) {
            const { id } = paymentMethod;

            const { data } = await axios.post('http://localhost:4000/api/reservations', {
                id,
            
            })
            console.log(data)
        }
    }

    return <form className=" card card-body" onSubmit={handleSubmit}>
        <h1>Ven a disfrutar de nuestras experiencias</h1>
        <ExperiencesCard />
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
                        <input type="email" className="form-control" required name="correo" placeholder="Escribe aqui..." />
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