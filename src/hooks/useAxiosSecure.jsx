import { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../proveder/AuthProvider';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://bistro-boss-server-khaki.vercel.app',
});

const useAxiosSecure = () => {
    //   const history = useHistory();
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()


   

    useEffect(() => {
        axiosInstance.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosInstance.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    // Logout user and redirect to login page
                    await logOut()
                    navigate('/login')
                }
                return Promise.reject(error);
            }
        );



        return axiosInstance;
    }, [logOut, navigate]);

    return [axiosInstance];
};

export default useAxiosSecure;


// const logoutAndRedirect = async () => {
    // Assuming you have an AuthContext with a logout method
    //   logOut()
    //   navigate('/login')
  //   await AuthContext.logout();
    // history.push('/login');
//   };