import React from "react";
import usePayment from "../../../../hooks/usePayment";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const [payments] = usePayment();
  // console.log(payments);
  return (
    <div>
      <Helmet>
        <title>WorldSpeak | Payment History</title>
      </Helmet>
      <h2 className="text-3xl text-center font-bold mb-5">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Transaction Id</th>
              <th>Class Names</th>
              <th>Total Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => {
              return (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>{payment?.transactionId}</td>
                  <td>
                    {payment?.classesName.map((item, index) => (
                      <span key={index}>
                        {item},<br />
                      </span>
                    ))}
                  </td>
                  <td>${payment?.price}</td>
                  <td>{payment?.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
