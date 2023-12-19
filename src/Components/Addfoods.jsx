import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import swal from 'sweetalert';

const Addfoods = () => {
    const {user} = useContext(AuthContext)
    console.log(user);

    const handleaddfood = (e) => {
        e.preventDefault()
        const donator_email = user?.email;
        const donator_name = user?.displayName;
        const donator_image = user?.photoURL;
        const food_name = e.target.foodname.value;
        const food_image = e.target.photo.value;
        const food_quantity = e.target.quantity.value;
        const pickup_location = e.target.location.value;
        const expired_date_time = e.target.date.value;
        const additional_notes =e.target.notes.value;

        const addfood = {food_image,food_name,donator_image,donator_name,food_quantity,pickup_location,expired_date_time,additional_notes,donator_email}

        // send data database
        fetch('https://community-food-sharing-server-rho.vercel.app/addfoods',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addfood)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if (data.acknowledged) {
                swal("Added a food!", "You clicked the button!", "success");              
                
            }
        })


    }
    return (
        <div className="hero min-h-screen mt-8 ">
            <form onSubmit={handleaddfood} className="card-body lg:w-7/12  shadow-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <input type="text" placeholder="Food name" name="foodname" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Image</span>
                        </label>
                        <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Quantity</span>
                        </label>
                        <input type="text" placeholder="Food quantity" name="quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <input type="text" placeholder="Location" name="location" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Expired Date/Time</span>
                    </label>
                    <input type="datetime-local" placeholder="Date/Time" name="date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Additional Notes</span>
                    </label>
                    <textarea placeholder="Enter your notes" name="notes" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-secondary">Add Food</button>
                </div>
            </form>




        </div>
    );
};

export default Addfoods;