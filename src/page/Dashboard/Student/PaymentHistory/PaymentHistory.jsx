import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user, loading } = useAuth();
  const { data: datas } = useQuery({
    queryKey: [user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const res = await fetch(`https://b7a12-summer-camp-server-side-saiful264.vercel.app/payments/${user?.email}`);
      return res.json();
    },
  });
  console.log("payment heistory", datas);
  return (
    <div>
        <Helmet>
        <title> SUMMERsports||Payment History</title>
      </Helmet>
      <SectionTitle
        heading="Payment History:"
      ></SectionTitle>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="bg-green-200">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>TransactionId</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {datas?.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td className="text-right">${data.price}</td>
                <td>{data.quantity}</td>
                <td>{data.transactionId}</td>
                <td>
                  <button className="btn btn-active btn-ghost">view</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
