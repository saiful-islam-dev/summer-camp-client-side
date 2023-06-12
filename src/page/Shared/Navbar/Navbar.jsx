import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        // const errorCode = code;
        toast.error(error.message);
      });
  };

  const navOptions = (
    <>
      <li>
        <NavLink to='/'
          className={({ isActive }) => (isActive ? "active" : "text-white")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/classes'
          className={({ isActive }) => (isActive ? "active" : "text-white")}>Classes</NavLink>
      </li>
      <li>
        <NavLink to='/instructors'
          className={({ isActive }) => (isActive ? "active" : "text-white")}>Instructors</NavLink>
      </li>
      <li>
        <NavLink to='/dashboard'
          className={({ isActive }) => (isActive ? "active" : "text-white")}>Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-black px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content text-white mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl flex items-center">
            <span className="text-md pl-2 md:text-3xl text-white uppercase font-bold">
            Summer<span className="text-yellow-400 font-mono lowercase">sports</span>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 font-semibold text-white text-lg">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="lg:tooltip lg:tooltip-bottom" data-tip={user?.displayName}>
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              </div>
              <button
                onClick={handleLogOut}
                className="btn btn-primary font-semibold"
              >
                SignOut
              </button>
            </div>
          ) : (
            <Link to="/login" className="btns-primary font-semibold">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
