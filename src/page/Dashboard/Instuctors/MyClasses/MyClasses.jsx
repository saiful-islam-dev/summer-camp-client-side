import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const MyClasses = () => {
  const { user, loading } = useAuth();

  const { data: datas } = useQuery({
    queryKey: [user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://b7a12-summer-camp-server-side-saiful264-saiful264.vercel.app/class/${user?.email}`
      );
      return res.json();
    },
  });

  console.log("datas", datas);
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | All users</title>
      </Helmet>

      <h3 className="text-3xl font-semibold my-4">
        My class
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="bg-green-200">
              <th>#</th>
              <th>Name</th>
              <th>status</th>
              <th>Enrolled</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {datas?.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.status}</td>
                <td>{user?.availableSeats}</td>
                <td>
                <button className="btn btn-active btn-ghost">update</button>
                </td>
              </tr>
            ))}
            {/* {datas.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td></td>
                <td></td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
