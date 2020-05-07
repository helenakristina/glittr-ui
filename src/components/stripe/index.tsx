import React from 'react';
import styled from 'styled-components';
import { StripeForm } from './stripe';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_W9IKXC26Ia8yxIHxAUHVLGJ900rkKNrxoP');

const StripeContainer = styled.div`
	width: 500px;
	margin: 0 auto;
`;

const Stripe = () => {
	return (
		<StripeContainer>
			<Elements stripe={stripePromise}>
				<StripeForm />
			</Elements>
		</StripeContainer>
	);
};

export default Stripe;
