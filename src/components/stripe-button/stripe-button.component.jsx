import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const publishableKey = "pk_test_zO1AK2RaOdNPJ0fL56bWDrdo00MIpthvr1";
  const onToken = token => {
    console.log(token);
    alert("Payement Successfull");
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="Clothes udemy"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your total is $${price}`}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
