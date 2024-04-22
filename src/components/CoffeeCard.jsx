import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setRemainingCoffees, remainingCoffees }) => {
  const { _id, fullName, quantity, photourl } = coffee;

  const handleDelete = (_id) => {
    // console.log(_id);
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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedId > 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = remainingCoffees.filter(
                (cof) => cof._id !== _id
              );
              setRemainingCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photourl} alt="Movie" />
      </figure>
      <div className="flex w-full px-6">
        <div>
          <h2 className="card-title">{fullName}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <p>Total quantity : {quantity}</p>
        </div>

        <div className="join join-vertical space-y-2">
          <button className="btn join-item">Details</button>
          <Link to={`updateCoffee/${_id}`}>
            <button className="btn join-item">Update</button>
          </Link>
          <button
            className=" join-item btn btn-warning"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
