import { FaGithub, FaGoogle } from "react-icons/fa";
import { Form, Link } from "react-router-dom";
import reg from "../../../assets/signup.jpg"


const Signup = () => {
    return (
        <div className="flex justify-center items-center my-8">
        <div>
          <Form
            onSubmit={handleRegister}
            className="card w-96 bg-slate-200 shadow-xl items-center text-center py-8 rounded-lg"
          >
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <div className="py-6 w-full">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input w-full max-w-xs"
              />
            </div>
            <div className="pb-6 w-full">
              <input
                type="text"
                name="photoURL"
                placeholder="Photo Url"
                className="input w-full max-w-xs"
              />
            </div>
            <div className="pb-6 w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="input w-full max-w-xs"
              />
            </div>
            <div className="w-full pb-2">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="input w-full max-w-xs"
              />
            </div>
            <p className="text-start text-base font-semibold">
              create a new acount
              <Link to="/login" className="text-indigo-700 underline pl-2">
                Login
              </Link>
            </p>
            <button type="submit" className="btns-primary">
              Register
            </button>
            <div className="py-4">
              <button onClick={handleGoogleLogIn} className="text-base flex items-center gap-3 font-semibold btns-primary">
                <span><FaGoogle /></span> Continue with google
              </button>
            </div>
            <button className="text-base flex items-center gap-3 font-semibold btns-primary">
              <span><FaGithub /></span> Continue with github
            </button>
          </Form>
        </div>
        <img className="w-4/12 m-0" src={reg} alt="" />
      </div>
    );
};

export default Signup;