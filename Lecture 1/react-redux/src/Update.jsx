import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';

function Update() {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const requiredUser = users.filter(f => f.id == id);
    const [updated_name, setName] = useState(requiredUser[0].name);
    const [updated_age, setAge] = useState(requiredUser[0].age);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (e)=>{
        e.preventDefault();
        dispatch(updateUser({
            id: id,
            name: updated_name,
            age: updated_age
        }))
        navigate("/")
    }    
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update User</h3>
                <form onSubmit={submit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' className='form-control' value={updated_name} placeholder='name' onChange={(e)=>{
                            setName(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input type="text" name='age' className='form-control' placeholder='age' value={updated_age}  onChange={(e)=>{
                            setAge(e.target.value)
                        }}/>
                    </div> <br />
                    <button className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
  )
}

export default Update