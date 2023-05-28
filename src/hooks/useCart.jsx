import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../proveder/AuthProvider";

const useCart = () => {

    const { user } = useContext(AuthContext)

    const { data: card = [], refetch } = useQuery({
        queryKey: ['cards', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/cards?email=${user?.email}`)
            return response.json()
        },
    })
    return [card, refetch]

}

export default useCart;