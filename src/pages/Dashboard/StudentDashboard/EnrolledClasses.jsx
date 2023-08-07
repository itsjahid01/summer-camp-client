import { Helmet } from "react-helmet-async";
import usePayment from "../../../hooks/usePayment";

const EnrolledClasses = () => {
  const [payments] = usePayment();
  // console.log(payments);
  return (
    <div>
      <Helmet>
        <title>WorldSpeak | Enrolled Classes</title>
      </Helmet>
      <h2 className="text-3xl text-center font-bold">Enrolled Classes</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* {enrolled.map((item, index) => (
              <tr key={item?._id}>
                <th>{index + 1}</th>
                <td>
                  {" "}
                  <img src={item?.Image} />{" "}
                </td>
                <td>{item?.Name}</td>
                <td>{item?.InstructorName}</td>
                <td>${item?.Price}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
