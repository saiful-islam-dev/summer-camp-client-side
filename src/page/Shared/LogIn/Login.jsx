import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../assets/login.jpg";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const { signIn } = useAuth();

  const onSubmit = (data) => {
    console.log(data);

    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };


  return (
    <div>
      <Helmet>
        <title>SUMMERsports || logIn</title>
      </Helmet>
      <div className="flex justify-center items-center my-8">
        <img className="w-4/12 m-0" src={login} alt="" />
        <div className="card w-96 bg-slate-200 shadow-xl items-center text-center py-8 rounded-lg">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl font-bold">LogIn</h1>
            <div className="py-6 w-full">
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                required
                className="input w-full max-w-xs"
              />
            </div>
            <div className="w-full pb-2">
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                required
                className="input w-full max-w-xs"
              />
            </div>

            <p className="text-start text-base font-semibold">
              create a new acount
              <Link to="/signup" className="text-yellow-400-700 underline pl-2">
                Register
              </Link>
            </p>
            <button type="submit" className="btns-primary">
              LogIn
            </button>
          </Form>
          <SocialLogin/>
        </div>
      </div>
    </div>
  );
};

export default Login;
