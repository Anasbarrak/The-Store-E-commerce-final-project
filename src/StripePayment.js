import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Checkout from './components/Checkout';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

 function PaymentElement() {
    const options = {
      // passing the client secret obtained from the Stripe Dashboard
      clientSecret: '{{CLIENT_SECRET}}',
    };
  
    return (
      <Elements stripe={stripePromise} options={options}>
        <Checkout />
      </Elements>
    );
  };
  export default PaymentElement