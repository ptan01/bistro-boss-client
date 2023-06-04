import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {

    const [card] = useCart()
    const totalprice = card.reduce((previous, current)=> previous + current.price , 0)
    const total = parseFloat(totalprice.toFixed(2))
    console.log(total)
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Payment</title>
            </Helmet>
            <SectionTitle subHeading='please process' heading='Payment'></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckoutFrom cart={card} price={total}></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default Payment;