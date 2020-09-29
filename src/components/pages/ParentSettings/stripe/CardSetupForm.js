import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Spin } from 'antd';

import CardSection from './CardSection';

export default function CardSetupForm(props) {
  const stripe = useStripe();
  const elements = useElements();
  const [submittingCard, setSubmittingCard] = useState(false);

  const handleSubmit = async event => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    setSubmittingCard(true);
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    let CLIENT_SECRET = null;
    await axios
      .get('https://story-squad-stripe.herokuapp.com/card-wallet')
      .then(res => {
        CLIENT_SECRET = res.data.client_secret;
      })
      .catch(err => {
        console.log('Get Request ERROR:', err);
      });

    const result = await stripe.confirmCardSetup(CLIENT_SECRET, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      // The setup has succeeded. Display a success message and send
      // result.setupIntent.payment_method to your server to save the
      // card to a Customer
      console.log('Thank you! Your card info has been successfully saved.');
      console.log(result.setupIntent.payment_method);
      console.log('Stripe Success Result', result);
      props.closeAddCardModal();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      {submittingCard ? (
        <Spin tip="Processing" />
      ) : (
        <button disabled={!stripe}>Save Card</button>
      )}
    </form>
  );
}
