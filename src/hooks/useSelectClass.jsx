import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelectClass = () => {
const {user, loading} = useAuth();

console.log(user?.email);

const {isLoading,refetch, data: selectClass= []} = useQuery({
    queryKey: ['useSelectClass', user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async ()=>{
        const res = await fetch(`http://localhost:5010/selectClass?email=${user?.email}`)
        return res.json();
    }
})
return [selectClass, isLoading, refetch]
};

export default useSelectClass;
