

const Featurecard = ({ featurecard }) => {
    const { food_image, food_name, donator_image, donator_name, donator_email, food_quantity, pickup_location, expired_date_time, additional_notes } = featurecard;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className="h-56 w-full" src={food_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {food_name}
                    <div className="badge badge-secondary">{food_quantity}</div>
                </h2>
                <p><strong>Location</strong> : {pickup_location}</p>
                <p><strong>expired_date</strong> : {expired_date_time}</p>
                <p><strong>notes</strong> : {additional_notes}</p>
                <div className="card-actions  mt-3">
                    <div className="badge"><img className="rounded-full w-12 relative mt-6" src={donator_image} alt="" /></div>
                    <div >
                        <p>{donator_name}</p>
                        <p>{donator_email}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Featurecard;