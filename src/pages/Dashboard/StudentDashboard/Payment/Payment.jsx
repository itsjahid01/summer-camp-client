import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "./CheckOutForm";
import useSelectedClasses from "../../../../hooks/useSelectedClasses";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);

const Payment = () => {
  const [classes] = useSelectedClasses();
  // console.log(classes);
  const total = classes.reduce((sum, item) => sum + item.Price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mb-8">Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm classes={classes} price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
