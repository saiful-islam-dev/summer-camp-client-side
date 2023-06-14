import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ClassCard = ({element}) => {
    const {_id,image,name,instructorName,price,availableSeats} = element;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const handleSecletClass = (aClass) =>{
        console.log("a class", aClass,);

        if (user && user.email) {
            const selectClass = {classId: _id, name, image, price, instructorName,email: user.email}
            fetch('https://b7a12-summer-camp-server-side-saiful264-saiful264.vercel.app/selectClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    // refetch(); // refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
      }

    return (
        <div className="card w-96 border-4 border-slate-900 rounded-md bg-base-300 shadow-xl">
        <figure>
          <div className="p-3">
            <img
              className="rounded-md border-4 border-slate-900"
              src={image}
              alt="Shoes"
            />
          </div>
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div>
              <p className="capitalize">
                <span className="font-semibold">Name:</span> {name}
              </p>
              <p className="capitalize">
                <span className="font-semibold">Instructor:</span>{" "}
                {instructorName}
              </p>
            </div>
            <div>
              <p className="capitalize">
                <span className="font-semibold">Price: </span>{" "}
                {price}
              </p>
              <p className="capitalize">
                <span className="font-semibold">Available seats:</span>
                {availableSeats}
              </p>
            </div>
          </div>
            <button onClick={() =>  handleSecletClass(element)} className="btn btn-outline">Select</button>
        </div>
      </div>
    );
};

export default ClassCard;