import { FaGithub, FaGoogle } from "react-icons/fa";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import reg from "../../../assets/signup.jpg";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { googleSignIn, createUser, updateUserProfile } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email, role:"student" };

          fetch("http://localhost:5010/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate(from, { replace: true });
              }
            });
        })
        .catch((error) => console.log(error));
    }).catch((error) => {
      const errorCode = error.code;
      toast.error(errorCode);
    });
  
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("LogIn successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="flex justify-center items-center my-8">
      <div className="card w-96 bg-slate-200 shadow-xl items-center text-center py-8 rounded-lg">
        <Form
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-2xl font-bold">Sign Up</h1>
          <div className="py-6 w-full">
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              className="input w-full max-w-xs"
            />
            {errors.name && (
              <span className="text-red-600 inline-block">Name is required</span>
            )}
          </div>
          <div className="pb-6 w-full">
            <input
              type="text"
              {...register("photoURL", { required: true })}
              placeholder="Photo Url"
              className="input w-full max-w-xs"
            />
            {errors.photoURL && (
              <span className="text-red-600 inline-block">Photo URL is required</span>
            )}
          </div>
          <div className="pb-6 w-full">
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input w-full max-w-xs"
            />
            {errors.email && (
              <span className="text-red-600 inline-block">Email is required</span>
            )}
          </div>
          <div className="w-full pb-2">
            <input
              type="password"
              name="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              placeholder="Password"
              className="input w-full max-w-xs"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}
          </div>
          <p className="text-center text-base font-semibold">
            create a new acount
            <Link to="/login" className="text-indigo-700 underline pl-2">
              Login
            </Link>
          </p>
          <button type="submit" className="btns-primary">
            Register
          </button>
        </Form>
        <div className="py-4">
          <button
              onClick={handleGoogleLogIn}
              className="text-base flex items-center gap-3 font-semibold btns-primary"
            >
              <span>
                <FaGoogle />
              </span>{" "}
              Continue with google
            </button>
          </div>
          <button className="text-base flex items-center gap-3 font-semibold btns-primary">
            <span>
              <FaGithub />
            </span>{" "}
            Continue with github
          </button>
      </div>
      <img className="w-4/12 m-0" src={reg} alt="" />
    </div>
  );
};

export default Signup;
