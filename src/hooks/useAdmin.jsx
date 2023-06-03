import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"



const useAdmin = ()=>{
    const {user, loading} = useAuth()

    const[axiosInstance] = useAxiosSecure()


    const {data: isAdmin, isLoading : isAdminLoading}= useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn : async ()=> {
            const res = await axiosInstance.get(`/users/admin/${user?.email}`)
            // console.log(res)
            return res.data.admin
        }
    })

    return [isAdmin, isAdminLoading]
}

export default useAdmin ;