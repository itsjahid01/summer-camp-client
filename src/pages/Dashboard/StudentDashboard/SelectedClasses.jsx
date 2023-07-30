import Swal from "sweetalert2";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import { MdDelete } from "react-icons/md";
const SelectedClasses = () => {
  const [classes, refetch] = useSelectedClasses();
  console.log(classes);
  const total = classes.reduce((sum, item) => sum + item.Price, 0);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectedClasses/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            console.log(data);
            if (data?.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center font-bold text-3xl mb-2">
        My Selected Classes
      </h2>
      <div className="flex justify-evenly items-center">
        <h2 className="text-3xl font-bold">Total Items: {classes.length}</h2>
        <h2 className="text-3xl font-bold">Total Price: ${total}</h2>
        <button className="btn  btn-info">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {classes.map((item, index) => (
            <tbody key={item._id}>
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="w-14 ">
                    <img className="rounded " src={item?.Image} alt="Img" />
                  </div>
                </td>
                <td>{item?.Name}</td>
                <td>${item?.Price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="btn btn-error text-2xl"
                  >
                    <MdDelete />
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
