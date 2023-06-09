import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const {user} = useAuth();
  const navOptions = <>
  <li></li>
  </>

  return (
    <div>
      <div className="navbar bg-red-500">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link className="normal-case text-xl flex items-center ">
            <div className="lg:bg-pink-400 lg:p-3 rounded-full gap-1">
              
            </div>
            <span className="text-4xl text-slate-700 font-mono font-bold">
              Learn<span className="text-yellow-400">IQ</span>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 font-semibold text-lg">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              {/* <button onClick={handleLogOut} className="btns-primary">
                log Out
              </button> */}
            </div>
          ) : (
            <Link to="/login" className="btns-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
