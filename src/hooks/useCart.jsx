import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {

    const { user, loading } = useAuth()
    const[axiosInstance] = useAxiosSecure()

    // const token = localStorage.getItem('access-token')

    const { data: card = [], refetch } = useQuery({
        queryKey: ['cards', user?.email],
        // queryFn: async () => {
        //     const response = await fetch(`http://localhost:5000/cards?email=${user?.email}`, {
        //         headers: {
        //             authorization : `bearer ${token}`
        //         }
        //     })
        //     return response.json()
        // },
        enabled: !loading ,
        queryFn: async () => {
            const response =  await axiosInstance(`/cards?email=${user?.email}`)
            console.log(response)
            return response.data 
        },
    })
    return [card, refetch]

}

export default useCart;