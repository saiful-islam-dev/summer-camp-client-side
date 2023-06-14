import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user,loading} = useAuth();
    // const [axiosSecure] = useAxiosSecure();

    const {data: userRole, isLoading: isRoleLoading} = useQuery({
        queryKey: ['userRole', user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async ()=>{
        const res = await fetch(`http://localhost:5010/users/admin/${user?.email}`)
        return res.json();
    }
    })
return [userRole, isRoleLoading]
};

export default useAdmin;