import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import swal from 'sweetalert';

const Addfoods = () => {
    const {user} = useContext(AuthContext)
    console.log(user);

    const handleaddfood = (e) => {
        e.preventDefault()
        const demail = user?.email;
        const dname = user?.displayName;
        const dimg = user?.photoURL;
        const fname = e.target.foodname.value;
        const fphoto = e.target.photo.value;
        const quantity = e.target.quantity.value;
        const location = e.target.location.value;
        const date = e.target.date.value;
        const notes =e.target.notes.value;

        const addfood = {demail,dname ,dimg,fname,fphoto,quantity,location,date,notes}

        // send data database
        fetch('http://localhost:5000/addfoods',{
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
        <div className="hero min-h-screen mt-8">
            <form onSubmit={handleaddfood} className="card-body lg:w-7/12  shadow-md">
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