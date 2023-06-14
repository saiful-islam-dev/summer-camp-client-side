import { useForm } from "react-hook-form";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
  const { register, handleSubmit, reset } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const fromData = new FormData();
    fromData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: fromData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        const imgURL = imgResponse.data.display_url;
        console.log(imgURL);
        const { name, instructorName, instructorEmail, price, availableSeats } =
          data;
        const newItem = {
          name,
          price: parseFloat(price),
          instructorName,
          instructorEmail,
          availableSeats,
          image: imgURL,
        };
        console.log(newItem);

        fetch("http://localhost:5010/class", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newItem),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after posting new menu item", data);
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      });

    //   .then((imgResponse) => {
    //     if (imgResponse.success) {
    //       const imgURL = imgResponse.data.display_url;
    //       const {
    //         name,
    //         instructorName,
    //         instructorEmail,
    //         price,
    //         availableSeats,
    //       } = data;
    //       const newItem = {
    //         name,
    //         price: parseFloat(price),
    //         instructorName,
    //         instructorEmail,
    //         availableSeats,
    //         image: imgURL,
    //       };
    //       console.log(newItem);
    //       axiosSecure.post("/menu", newItem).then((data) => {
    //         console.log("after posting new menu item", data.data);
    //         if (data.data.insertedId) {
    //           reset();
    //           Swal.fire({
    //             position: "top-end",
    //             icon: "success",
    //             title: "Item added successfully",
    //             showConfirmButton: false,
    //             timer: 1500,
    //           });
    //         }
    //       });
    //     }
    //   });
  };

  return (
    <div className="w-full px-10">
      <SectionTitle heading="Add Class"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex my-4">
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Class Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Class Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text">Item Image*</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name</span>
            </label>
            <input
              type="text"
              {...register("instructorName", { required: true })}
              placeholder="Instructor Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor Email</span>
            </label>
            <input
              type="email"
              {...register("instructorEmail", { required: true })}
              placeholder="Instructor Email"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Available Seats</span>
            </label>
            <input
              type="number"
              {...register("availableSeats", { required: true })}
              placeholder="Available Seats"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <input className="btn btn-block" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddClass;
