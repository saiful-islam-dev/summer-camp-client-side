import { FaHome } from "react-icons/fa";
import { FcBookmark } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [useRole] = useAdmin();

  console.log(useRole);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-slate-300 text-base-content">
          {/* Sidebar content here */}

          {useRole?.role === "admin" ? (
            <>
              <li>
                <NavLink to="manageusers">
                  {" "}
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="manageclass">Manage Classes</NavLink>
              </li>
            </>
          ) : useRole?.role === "instructor" ? (
            <>
              <li>
                <NavLink to="addclass">
                  Add A Class
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="myclasses">
                  My Classes
                </NavLink>{" "}
              </li>
            </>
          ) : useRole?.role === "student" ?  (
            <>
              <li>
                <NavLink to="seclectedClass">
                  My Selected Classes
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="enrolledclass" className="py-2">
                  My Enrolled Classes
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="phistroy">
                  Payment Histroy
                </NavLink>{" "}
              </li>
            </>
          ): <></>}

          {/* all user down */}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/classes">Our Class</NavLink>
          </li>
          <li>
            <NavLink to="/instructors">Order Instructors</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
