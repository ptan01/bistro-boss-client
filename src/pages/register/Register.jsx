import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../proveder/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const {createUser, updateUserProfile} = useContext(AuthContext)

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user ;
            updateUserProfile(data.name, data.photo)
            .then(()=>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sign Up Complite',
                    showConfirmButton: false,
                    timer: 1500
                  })
                reset()
                navigate('/')
            })
            console.log(user)
        })
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name")} name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" {...register("photo")} name="photo" placeholder="Photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email",{ required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password",{ minLength: 6, pattern:/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/ })} placeholder="password" className="input input-bordered" />
                            {errors.password && <span>password must be have 6 length one uppercase one lowercase and one number</span>}
                            <label className="label">
                               <p><small>Already have an Account ? <Link to='/login'>Login</Link></small></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;