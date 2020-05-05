import React, { useState, useEffect, FormEvent } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeError } from '@stripe/stripe-js';
import styled from 'styled-components';

const CARD_OPTIONS = {
	style: {
		base: {
			color: '#32325d',
			fontFamily: 'Arial, sans-serif',
			fontSmoothing: 'antialiased',
			fontSize: '16px',
			'::placeholder': {
				color: '#32325d',
			},
		},
		invalid: {
			color: '#fa755a',
			iconColor: '#fa755a',
		},
	},
};

const Form = styled.form`
	width: 30vw;
	align-self: center;
	box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1), 0px 2px 5px 0px rgba(50, 50, 93, 0.1),
		0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
	border-radius: 7px;
	padding: 40px;
`;

const Button = styled.button`
	background: #5469d4;
	font-family: Arial, sans-serif;
	color: #ffffff;
	border-radius: 0 0 4px 4px;
	border: 0;
	padding: 12px 16px;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
	display: block;
	transition: all 0.2s ease;
	box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
	width: 100%;
`;

export const StripeForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [error, setError] = useState<StripeError>();
	const [isCardComplete, setIsCardComplete] = useState<boolean>(false);
	const [isProcessing, setIsProcessing] = useState<boolean>(false);
	const [billingDetails, setBillingDetails] = useState({
		email: 'sonja@sonja.com',
		phone: '55555555',
		name: 'sonja',
		address: {
			postal_code: '97219',
		},
	});
	const [clientSecret, setClientSecret] = useState('');

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		window
			.fetch('https://glittr-server.herokuapp.com/create-payment-intent/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
			})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setClientSecret(data.clientSecret);
			});
	}, []);

	const handleChange = async (event: any) => {
		setError(event.error ? event.error.message : '');
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		const cardElement = elements!.getElement(CardElement);
		console.log('here', cardElement);
		if (cardElement) {
			if (!stripe || !elements) {
				return;
			}

			if (error && cardElement) {
				cardElement.focus();
				return;
			}

			if (isCardComplete) {
				setIsProcessing(true);
			}

			const payload = await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: cardElement,
					billing_details: {
						name: 'Jenny Rosen',
					},
				},
			});
			console.log(payload);
			setIsProcessing(false);
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<CardElement options={CARD_OPTIONS} onChange={handleChange} />
			<Button type="submit" disabled={!stripe || isProcessing}>
				Donate Now
			</Button>
			{error && (
				<div className="card-error" role="alert">
					{error}
				</div>
			)}
		</Form>
	);
};
