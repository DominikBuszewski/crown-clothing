import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { findAllInRenderedTree } from "react-dom/test-utils";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_S4PC2LF8WcmSpAxHCO60WadJ00VvEv5g9O";

  const onToken = token => {
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN CLOTHING"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is ${price}$`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
