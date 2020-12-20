import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import './Pagos.css'




const stripePromise = loadStripe("pk_test_51I0YBEJbuFpI8QouL9S6CtZvxYQ66rSXNQwoyzJmlohxm55E2tSEmx0VEawETu3dCYYdGVVDt8ME6i0XwPaCTH0Q00hLQjzP0H");

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    }



    return <form className="card" onSubmit={handleSubmit}>
        <CardElement />
        <button className="buy">
            Buy
        </button>
    </form>
};


function Pay() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
};






export default Pay;