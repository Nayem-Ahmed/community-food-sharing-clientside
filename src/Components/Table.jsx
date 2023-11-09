import React from 'react';

const Table = ({table,handledelete}) => {
    const{_id,food_name, food_image,donator_name,donator_email} = table;
    return (
        <tr>

            <td>{food_name}</td>
            <td><img className='w-40' src={food_image} alt="" /></td>
            <td>{donator_name}</td>
            <td>{donator_email}</td>
            <td><button onClick={() => handledelete(_id)} className='btn btn-error'>Delete</button></td>
            <td><button className='btn btn-accent'>Update</button></td>
            <td><button className='btn btn-primary'>Manage</button></td>
          
            
        </tr>
    );
};

export default Table;