import { useQuery } from "@tanstack/react-query";


const AllUser = () => {

    const {data : users = [] , refetch} = useQuery(['users'], async()=> {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    } )

    return (
        <div>
            <h1>All user {users.length} </h1>
        </div>
    );
};

export default AllUser;