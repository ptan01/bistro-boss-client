import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import './common.css'



const CheckoutFrom = ({ price, cart }) => {

  console.log(price)
  const [axiosInstance] = useAxiosSecure()
  const stripe = useStripe()
  const { user } = useAuth()
  const elements = useElements();
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState("")
  const [processing, setProcessing] = useState(false)
  const [transactionID, setTransactionID] = useState('')


  useEffect(() => {
    if (price > 0) {
      axiosInstance.post('/create-payment-intent', { price })
        .then(res => {
          console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret)
        })
    }
  }, [price, axiosInstance])




  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }


    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      setCardError(error.message)
      console.log(error)
    }
    else {
      setCardError('')
      console.log(paymentMethod)
    }
    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous'
          },
        },
      },
    );

    if (confirmError) {
      setCardError(confirmError.message)
    }
    setProcessing(false)
    if (paymentIntent.status === 'succeeded') {
      setTransactionID(paymentIntent.id)
      const payment = {
        email: user.email,
        price: price,
        transactionId: paymentIntent.id,
        date: new Date(),
        status: 'service pending',
        quantity: cart.length,
        cartItems: cart.map(item => item._id),
        menuItems: cart.map(item => item.foodId),
        itemNames: cart.map(item => item.name)
      }

      axiosInstance.post('/payments', payment)
        .then(res => {
          console.log(res.data)
          if (res.data.deleteResult.deletedCount > 0 && res.data.insartResult.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Payment Success Fully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })

    }
    console.log(paymentIntent)


  }

  console.log(clientSecret)

  return (
    <div className='w-2/3 mx-auto'>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className='text-center'>
          <button className="btn btn-outline btn-primary btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret || processing}>
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className='text-red-600'>{cardError}</p>}
      {transactionID && <p className='text-green-600'>Transaction complete with Transaction ID : {transactionID}</p>}
    </div>
  );
};

export default CheckoutFrom;