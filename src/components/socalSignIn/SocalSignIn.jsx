import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../proveder/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocalSignIn = () => {

    const { googleLogin } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'


    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)

                const saveUser = { name: user.displayName, email: user.email }
                fetch('https://bistro-boss-server-khaki.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })

            })
            .catch(err => {
                console.log(err.message)
            })
    }


    return (
        <div>
            <div className="divider"></div>
            <div className="text-center mb-5">
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                    <FaGoogle className="text-2xl"></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocalSignIn;