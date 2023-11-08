import { useLoaderData } from "react-router-dom";


const Singlepage = () => {
    const singleloader = useLoaderData();
    const { _id, food_image, food_name, donator_image, donator_name, donator_email, food_quantity, pickup_location, expired_date_time, additional_notes } = singleloader;

    return (
        < div className="hero min-h-screen md:bg-base-200 my-4" >
            <div className="">
                <h1 className="text-xl font-semibold border-b-2 inline">Donor Information</h1>
                <div className="flex items-center gap-3 mt-2"><img className="rounded-full w-12" src={donator_image} alt="" />
                    <p>{donator_name}</p></div>
                <h1 className="text-xl font-semibold border-b-2 inline">Single Food Section</h1>
                <div className="flex md:flex-row flex-col gap-6 mt-3">
                    <img src={food_image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-bold">{food_name}</h1>
                        <p><strong>Food Quantity : </strong>{food_quantity}</p>
                        <p><strong>Expired Date : </strong> {expired_date_time}</p>

                        <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn bg-[#e74c3c] text-white mt-4">Food Request</button>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}

                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    {/* <input type="text" placeholder="Food name" defaultValue={food_name} readOnly name="foodname" className="input input-bordered mb-3 mr-2"   />
                                        <input type="text" placeholder="Food Image" defaultValue={food_image} readOnly name="foodimg" className="input input-bordered mb-3 mr-2"   />
                                        <input type="text" placeholder="Food ID" defaultValue={_id} readOnly name="foodid" className="input input-bordered mb-3 mr-2"   />
                                        <input type="email" placeholder="Donator email" defaultValue={donator_email} readOnly name="donatemail" className="input input-bordered mb-3 mr-2"   />
                                        <input type="text" placeholder="Donator Name" defaultValue={donator_name} readOnly name="donatname" className="input input-bordered mb-3 mr-2"   />
                                        <input type="email" placeholder="User email" name="useremail" className="input input-bordered mb-3 mr-2"   />
                                        <input type="date" placeholder="Request Date" readOnly name="requdate" className="input input-bordered mb-3 mr-2"   />
                                        <input type="text" placeholder="Pickup Location" defaultValue={pickup_location} readOnly name="location" className="input input-bordered mb-3 mr-2"   />
                                        <input type="date" placeholder="Expire Date" defaultValue={expired_date_time} readOnly name="exdate" className="input input-bordered mb-3 mr-2"   /> */}
                                    <input type="text" placeholder=" Donation Money" name="money" className="input w-full input-bordered mb-3 mr-2" />
                                    <textarea placeholder="Enter your notes" defaultValue={additional_notes} name="notes" className="input w-full input-bordered" required />

                                    <div className="text-center">
                                        <button onClick={handlerequest} className="btn  bg-[#e74c3c] text-white mt-4">Food Request</button>
                                    </div>
                                </form>


                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Singlepage;