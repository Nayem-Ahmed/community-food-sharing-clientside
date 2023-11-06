import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center mt-20">
            <h1 className="font-bold text-2xl mb-4">Oops!</h1>
            <i>Sorry, an unexpected error has occurred.</i><br></br>
           <Link to = '/'><button className="btn btn-warning mt-5">Go Home</button></Link>

        </div>
    );
};

export default Error;