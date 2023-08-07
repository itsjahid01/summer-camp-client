import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "./CheckOutForm";
import useSelectedClasses from "../../../../hooks/useSelectedClasses";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);

const Payment = () => {
  const [classes, refetch] = useSelectedClasses();
  // console.log(classes);
  const total = classes.reduce((sum, item) => sum + item.Price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <Helmet>
        <title>WorldSpeak | Payment</title>
      </Helmet>
      <h2 className="text-4xl text-center font-bold mb-8">Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm
          classes={classes}
          refetch={refetch}
          price={price}
        ></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
