import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data: userRole, isLoading: isRoleLoading} = useQuery({
        queryKey: ["useRole", user?.email],
        queryFn: async ()=> {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res);
            return res.data;
        }
    })
return [userRole, isRoleLoading]
};

export default useAdmin;