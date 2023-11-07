import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center mt-20">
            <h1 className="font-bold text-2xl mb-4">Oops!</h1>
            <i>Sorry, an unexpected error has occurred.</i><br></br>
            <img className="w-80 mx-auto mt-3" src="https://i.ibb.co/c67qgB8/istockphoto-1456566772-1024x1024.jpg" alt="" />
           <Link to = '/'><button className="btn btn-warning mt-5">Go Home</button></Link>

        </div>
    );
};

export default Error;