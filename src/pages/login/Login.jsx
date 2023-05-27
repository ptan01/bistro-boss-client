import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha'
import { AuthContext } from '../../proveder/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)
    const location = useLocation() ;
    const navigate = useNavigate()


    console.log(location.state.from.pathname)

    const from = location.state?.from?.pathname || '/'
    
   
// pass 1234Ff

    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const pass = event.target.password.value;
        console.log(email, pass)
        loginUser(email, pass)
            .then((result) => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: 'Login success fully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                navigate(from, {replace: true})
            })
            .catch(err => {
                console.log(err)
            })
    }
    

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleCaptcha = (e) => {
        e.preventDefault()
        const user_captcha_value = e.target.value
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input  onBlur={handleCaptcha} type="text"  placeholder="type the captcha" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <label className="label">
                            <p><small>New here ? Please <Link to='/register'>Sign Up</Link></small></p>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;