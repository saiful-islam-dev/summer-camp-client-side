import { Form, Link } from "react-router-dom";
import login from "../../assets/login.jpg";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { SingIn } = useAuth();

  const onSubmit = (data) => {
    console.log(data);

    SingIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
    }).cat;
  };

  const handleGoogleLogIn = () => {};
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div>
        <div className="flex justify-center items-center my-8">
          <img className="w-4/12 m-0" src={login} alt="" />
          <div>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="card w-96 bg-slate-200 shadow-xl items-center text-center py-8 rounded-lg"
            >
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
                <Link
                  to="/signup"
                  className="text-yellow-400-700 underline pl-2"
                >
                  Register
                </Link>
              </p>
              <button type="submit" className="btns-primary">
                LogIn
              </button>
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
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
