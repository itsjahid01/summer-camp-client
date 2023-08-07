import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../provider/AuthProvider";
import Swal from "sweetalert2";
// import "./checkOutForm.css";

const CheckOutForm = ({ classes, refetch, price }) => {
  //   console.log(price);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        //   console.log(res?.data?.clientSecret);
        setClientSecret(res?.data?.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      //   console.log("paymentMethod", paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "unknown",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    // console.log("payment intent", paymentIntent);

    setProcessing(false);

    if (paymentIntent?.status === "succeeded") {
      setTransactionId(paymentIntent?.id);
      const transactionId = paymentIntent?.id;
      const payment = {
        email: user?.email,
        transactionId,
        price,
        date: new Date(),
        quantity: classes.length,
        classesName: classes.map((item) => item?.Name),
        classesId: classes.map((item) => item?._id),
        status: "service pending",
      };

      axiosSecure.post("/payments", payment).then((res) => {
        // console.log(res.data);
        if (res?.data?.insertResult?.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment History saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-9/12 mx-auto mt-10">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="btn btn-success mt-6"
        >
          Pay
        </button>
        {cardError && <p className="text-red-600 mt-4">{cardError}</p>}
        {transactionId && (
          <p className="text-green-500 mt-4">Payment Successfully done.</p>
        )}
      </form>
    </>
  );
};

export default CheckOutForm;
