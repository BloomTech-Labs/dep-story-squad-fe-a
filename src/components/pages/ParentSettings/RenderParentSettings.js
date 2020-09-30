import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import CardSetupForm from './stripe/CardSetupForm';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripe_key =
  process.env.REACT_APP_STRIPE_KEY || 'pk_test_TYooMQauvdEDq54NiTphI7jx';
const stripePromise = loadStripe(stripe_key);

const RenderParentSettings = () => {
  const [addCardModalVisible, setAddCardModalVisible] = useState(false);

  function closeAddCardModal() {
    setAddCardModalVisible(false);
  }

  return (
    <div>
      <h1>Subscription</h1>
      <div>
        <button onClick={() => setAddCardModalVisible(true)}>
          Add Credit Card
        </button>
        <button>Delete Credit Card</button>
        <button>Edit Family Plan</button>

        <Modal
          open={addCardModalVisible}
          onClose={() => setAddCardModalVisible(false)}
          classNames="credit-card-modal"
          styles={{
            modal: {
              width: '800px',
              padding: '35px',
            },
          }}
        >
          <Elements stripe={stripePromise}>
            <CardSetupForm closeAddCardModal={closeAddCardModal} />
          </Elements>
        </Modal>
      </div>
    </div>
  );
};

export default RenderParentSettings;
