import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import { FcGoogle } from 'react-icons/fc';
import { toast } from "react-toastify";




const Login = () => {
    const { loginuser, logingoogle } = useContext(AuthContext)
    const location = useLocation()
    const navigate  = useNavigate()

    const handlesubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        loginuser(email, password)
            .then(result => {
                console.log(result.user)
                toast("Login successful")
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                console.error(error)
                toast('Incorrect password');

            });


    }
    const handlrgoogle = ()=>{
        logingoogle()
        .then(result => {
            console.log(result.user)
            toast("Login successful")
            navigate(location?.state ? location.state : '/');
        })
        .catch((error) => {
            console.error(error)

        });

    }

    return (
        <div className="mt-16 relative">
            <div className="hero min-h-screen  md:bg-gradient-to-r from-indigo-500 relative  ">

                <div className="hero-content ">

                    <div className="card w-full max-w-xl shadow-2xl bg-base-100">
                        <form onSubmit={handlesubmit} className="card-body">
                            <h3 className="text-xl font-semibold">Please Login</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                                <i className="text-center border-b-2">or</i>
                                <button onClick={handlrgoogle} className="btn mx-auto mt-2  btn-circle">
                                    <FcGoogle className="text-xl"></FcGoogle>
                                </button>
                            </div>
                            <p>Not a Member? <Link className="text-blue-600 underline" to="/signup">Registration</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;