import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const {
    _id,
    fullName,
    quantity,
    supplier,
    taste,
    category,
    details,
    photourl,
  } = coffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photourl = form.photourl.value;
    const updatedCoffee = {
      fullName,
      quantity,
      supplier,
      taste,
      category,
      details,
      photourl,
    };

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div>
        <div className=" bg-base-200">
          <div className="p-4 flex-col">
            <p className="text-bold text-3xl">Update coffee : {fullName}</p>
            <div className="p-20 w-full shadow-2xl bg-base-100 rounded-xl">
              <form
                className="grid md:grid-cols-2 gap-6"
                onSubmit={handleUpdateCoffee}
              >
                <div className=" col-span-1">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={fullName}
                    placeholder="Coffee Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className=" col-span-1">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    defaultValue={quantity}
                    placeholder="Quantity"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className=" col-span-1">
                  <label className="label">
                    <span className="label-text">Supplier</span>
                  </label>
                  <input
                    type="text"
                    name="supplier"
                    defaultValue={supplier}
                    placeholder="Sipplier name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className=" col-span-1">
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <input
                    type="text"
                    name="taste"
                    defaultValue={taste}
                    placeholder="Taste"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className=" col-span-1">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    defaultValue={category}
                    placeholder="Category"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className=" col-span-1">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    defaultValue={details}
                    placeholder="details"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className=" col-span-2">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    name="photourl"
                    defaultValue={photourl}
                    placeholder="photourl"
                    className="input input-bordered"
                    required
                  />
                </div>

                <button>
                  <input
                    type="submit"
                    value="Update coffee"
                    className="col-span-2 bg-gray-100 px-2 py-2 rounded-xl"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
