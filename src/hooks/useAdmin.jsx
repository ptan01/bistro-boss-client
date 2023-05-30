import { useContext } from "react"
import { AuthContext } from "../proveder/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"



const useAdmin = ()=>{
    const {user} = useContext(AuthContext)

    const token = localStorage.getItem('access-token')

    const {data: isAdmin, isLoading : isAdminLoading}= useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn : async()=> {
            const res = await axios.get(`http://localhost:5000/users/admin/${user?.email}`, {
                headers: {
                    authorization : `bearer ${token}`
                }
            })
            console.log(res.data.admin)
            return res.data.admin
        }
    })

    return [isAdmin, isAdminLoading]
}

export default useAdmin ;