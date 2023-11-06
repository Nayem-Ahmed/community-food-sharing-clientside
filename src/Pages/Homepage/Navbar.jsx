import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../Provider/Authprovider';

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
    console.log(user);
    const link = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/availablefoods">Available Foods</NavLink></li>
    <li><NavLink to="/addfood">Add Food</NavLink></li>
    <li><NavLink to="/managefoods">Manage My Foods</NavLink></li>
    <li><NavLink to="/foodrequest">My Food Request</NavLink></li>
    </>
    return (
        // fixed left-0 top-0 z-20 w-[100%]
        <div className="navbar bg-base-100 shadow-md">  
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <Link to="/">
               <img className='w-20 md:w-52' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {link}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? 
                    <div className='flex items-center gap-2'>
                    <img className='rounded-full w-8' src={user.photoURL} alt="" />
                    <span>{user.displayName}</span>                        
                    <button onClick={logOut} className="btn bg-black text-white">Logout</button>
                   
                    
                </div>
                :
                <Link to = "/login"><button className="btn bg-black text-white">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;