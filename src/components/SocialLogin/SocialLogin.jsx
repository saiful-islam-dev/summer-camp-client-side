import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { googleSignIn} = useAuth();

    const handleGoogleLogIn = () => {
        googleSignIn()
          .then((result) => {
            const loggedInUser = result.user;
                console.log(loggedInUser);
            const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role:"student" };
            fetch("https://b7a12-summer-camp-server-side-saiful264.vercel.app", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then(() => {
                navigate(from, { replace: true });
            })
          })
          .catch((error) => toast.error(error.message));
      };
    return (
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
    );
};

export default SocialLogin;