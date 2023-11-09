import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
// import swal from "sweetalert";


const Singlepage = () => {
    const singleloader = useLoaderData();
    const { _id, food_image, food_name, donator_image, donator_name, donator_email, food_quantity, pickup_location, expired_date_time, additional_notes } = singleloader;

    const handlerequest = (e) => {
        e.preventDefault()

        const donation_money = e.target.money.value;
        const additional_notes = e.target.notes.value;

        const request = { food_image, food_name, donator_image, donator_name, food_quantity, pickup_location, expired_date_time, additional_notes, donator_email, donation_money }
        // send data database
        fetch('http://localhost:5000/request', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // swal("Success food request!", "You clicked the button!", "success");
                    toast("Success food request")

                }
            })

    }
    return (
        // < div className="hero min-h-screen md:bg-base-200 my-4" >
        //     <div className="">
        //         <h1 className="text-xl font-semibold border-b-2 inline">Donor Information</h1>
        //         <div className="flex items-center gap-3 mt-2"><img className="rounded-full w-12" src={donator_image} alt="" />
        //             <p>{donator_name}</p></div>
        //         <h1 className="text-xl font-semibold border-b-2 inline">Single Food Section</h1>
        //         <div className="flex md:flex-row flex-col gap-6 mt-3">
        //             <img src={food_image} className="md:max-w-sm rounded-lg shadow-2xl" />
        //             <div>
        //                 <h1 className="text-xl font-bold">{food_name}</h1>
        //                 <p><strong>Food Quantity : </strong>{food_quantity}</p>
        //                 <p><strong>Expired Date : </strong> {expired_date_time}</p>

        //                 <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn bg-[#e74c3c] text-white mt-4">Food Request</button>
        //                 {/* You can open the modal using document.getElementById('ID').showModal() method */}

        //                 <dialog id="my_modal_3" className="modal">
        //                     <div className="modal-box">
        //                         <form onSubmit={handlerequest} method="dialog">
        //                             {/* if there is a button in form, it will close the modal */}
        //                             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        //                             <input type="text" placeholder=" Donation Money" name="money" className="input w-full input-bordered mb-3 mr-2" />
        //                             <textarea placeholder="Enter your notes" defaultValue={additional_notes} name="notes" className="input w-full input-bordered" required />

        //                             <div className="text-center">
        //                                 <button type="submit" className="btn  bg-[#e74c3c] text-white mt-4">Food Request</button>
        //                             </div>
        //                         </form>


        //                     </div>
        //                 </dialog>
        //             </div>
        //         </div>
        //     </div>
        // </div >
        <div className="hero min-h-screen md:bg-base-200 my-4">
            <div className="">
                <h1 className="text-xl font-semibold border-b-2 inline">Donor Information</h1>
                <div className="flex items-center gap-3 mt-2">
                    <img className="rounded-full w-12" src={donator_image} alt="" />
                    <p>{donator_name}</p>
                </div>
                <h1 className="text-xl font-semibold border-b-2 inline">Single Food Section</h1>
                <div className="flex md:flex-row flex-col gap-6 mt-3">
                    <img src={food_image} className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-bold">{food_name}</h1>
                        <p><strong>Food Quantity : </strong>{food_quantity}</p>
                        <p><strong>Expired Date : </strong> {expired_date_time}</p>

                        <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn bg-[#e74c3c] text-white mt-4">Food Request</button>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}

                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form onSubmit={handlerequest} method="dialog">
                                    {/* if there is a button in the form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
                                    <input type="text" placeholder="Donation Money" name="money" className="input w-full input-bordered mb-3 mr-2" />
                                    <textarea placeholder="Enter your notes" defaultValue={additional_notes} name="notes" className="input w-full input-bordered" required />

                                    <div className="text-center">
                                        <button type="submit" className="btn  bg-[#e74c3c] text-white mt-4">Food Request</button>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Singlepage;