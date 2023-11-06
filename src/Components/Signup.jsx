import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";



const Signup = () => {
    const { createuser } = useContext(AuthContext)
    const [registersuccess, setRegistersuccess] = useState('')
    const [registererror, setRegistererror] = useState('')
    const navigate = useNavigate()

    const handlesignup = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        if (password.length < 6) {
            return setRegistererror('Password should be at least 6 characters ');


        }

        else if (!/[A-Z]/.test(password)) {
            return setRegistererror("Password must contain at least one uppercase letter.")


        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return setRegistererror('Password must contain at least one special character')


        }

        setRegistersuccess('')
        setRegistererror('')

        createuser(email, password)
            .then(result => {
                console.log(result.user)
                if (setRegistersuccess) {
                    toast("User registation successful")
                    navigate('/')

                }
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => console.log('profile upload'))
                    .catch()
            })
            .catch(error => {
                console.error(error)
                setRegistererror(error.message)
            })
    }
    return (

        <div className="mt-16 relative">
            <div className="hero min-h-screen md:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                <div className="hero-content">
                    <div className="card w-full max-w-xl shadow-2xl bg-base-300">
                        <form onSubmit={handlesignup} className="card-body">
                            <h3 className="text-xl font-semibold text-center mb-12">Please Registration</h3>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="URL" name="photo" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-secondary">Registration</button>
                            </div>
                            <p>You have an already account? <Link className="text-blue-600 underline" to="/login">Login</Link></p>
                            {
                                registererror && <p className="text-red-500 text-sm text-center">{registererror}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Signup;