import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import useSelectClass from "../../../../hooks/useSelectClass";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);
const Payment = () => {
  const [selectClass] = useSelectClass();
   const total = selectClass.reduce((sum, item) => item.price + sum, 0);
   const price = parseFloat(total.toFixed(2))
  return (
    <div>
      <Helmet>
        <title> SUMMERsports || Payment</title>
      </Helmet>
      <SectionTitle
        heading="Payment"
      ></SectionTitle>
      <h2 className="text-3xl pb-4">Exploring Adventure at SUMMERsports</h2>
     <div >
     <Elements stripe={stripePromise}>
        <CheckoutForm selectClass={selectClass} price={price}/>
      </Elements>
     </div>
    </div>
  );
};

export default Payment;
