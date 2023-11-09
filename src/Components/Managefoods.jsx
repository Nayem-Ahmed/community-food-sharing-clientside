import { useLoaderData } from "react-router-dom";
import Table from "./Table";
import { useState } from "react";
import Swal from "sweetalert2";

const Managefoods = () => {
    const manageloader = useLoaderData();
    const [users,setUsers] = useState(manageloader)
    console.log(manageloader);
    // const [availableFoods, setAvailableFoods] = useState([])
    // const [foods, setfoods] = useState(availableFoods)
    // const [searchText, setSearchText] = useState('')
    // const [sortingOption, setSortingOption] = useState('')


    // const filterCardData = availableFoods?.filter((item) => {
    //     if (item && item.category && typeof item.category === 'string' && typeof searchText === 'string') {
    //         return item.category.toLowerCase().includes(searchText.toLowerCase());
    //     }
    // });

    // const handleSearch = (e) => {
    //     e.preventDefault()
    //     const food = e.target.food.value;
    //     setSearchText(food)
    // }
    const handledelete = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            fetch(`http://localhost:5000/addfoods/${id}`,{
                method:'DELETE',

            })
            .then(res => res.json())
            .then(data=>{
                if (data.deletedCount > 0) {
                    
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const reamaining = users.filter(deletefood=> deletefood._id !== id);
              setUsers(reamaining)
                    
                }
            })

            }
          });

    }
    return (

        <table className="mx-auto mt-6 border">
            <thead className="bg-slate-400">
                {/* <th>ID</th> */}
                <th className="border-r-2">Food Name</th>
                <th className="border-r-2">Food Img</th>
                <th className="border-r-2">Donator Name</th>
                <th className="border-r-2">Donator Email</th>
                <th className="border-r-2">Delete</th>
                <th className="border-r-2">Update</th>
                <th className="border-r-2">Manage</th>
            </thead>
            <tbody>
               {
                users.map(table=> <Table key={table._id} handledelete={handledelete} table={table}></Table>)
               }
            </tbody>
           
        </table>

    )
}
export default Managefoods;