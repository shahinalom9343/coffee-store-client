import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photourl = form.photourl.value;
    const newCoffee = {
      fullName,
      quantity,
      supplier,
      taste,
      category,
      details,
      photourl,
    };
    // console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
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
            <div className="p-20 w-full shadow-2xl bg-base-100 rounded-xl">
              <form
                className="grid md:grid-cols-2 gap-6"
                onSubmit={handleAddCoffee}
              >
                <div className=" col-span-1">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
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
                    placeholder="photourl"
                    className="input input-bordered"
                    required
                  />
                </div>

                <button>
                  <input
                    type="submit"
                    value="Add coffee"
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

export default AddCoffee;
