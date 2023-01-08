/* Seventh react hook tutorial in which we will learn about how to create a simple login form in react using functional component  */

import React from 'react'
import { useState } from 'react';
import { DatePicker } from 'antd';
import 'react-datepicker/dist/react-datepicker.css';

const Donate = () => {
    const [selectedDate,setSelectedDate]=useState(null); // This is for only frontend and while fetching data by selecting the input field I have got some error so I am writing this 
    const [userRegistration, setuserRegistration] = useState({

        fullname: "",

        email: "",
        contact: "",
        address: "",
        dataofbirth:"",
        gender: "",
        bloodgroup: ""

    });
    const [records, setRecords] = useState([]);


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setuserRegistration({ ...userRegistration, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userRegistration.fullname && userRegistration.email) {


            const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
            // console.log(records);
            setRecords([...records, newRecord]);
            // console.log(records);

            setuserRegistration({ fullname: "", email: "", contact: "", address: "", gender: "" })
        }
        else {
            alert("Please fill the Data Properly");
        }
    }

    return (
        <div className='container'>
            <h4>Please fill data Properly..</h4>
            <div className="formtable">

                <form action="" onSubmit={handleSubmit}>
                    <div className="formitem">

                        <label htmlFor="fullname" className='label'>Full Name</label><br></br>
                        <input type="text" name="fullname" id="fullname"
                            value={userRegistration.fullname} onChange={handleInput}
                            autoComplete='off' className='textarea'></input><br></br>
                    </div>

                    <div className="formitem">
                        <label htmlFor="email" className='label'>Email</label><br></br>
                        <input type="email" name="email" autoComplete='off' id="email"
                            value={userRegistration.email} onChange={handleInput}
                            className='textarea'></input>
                    </div>
                    <div className="formitem">
                        <label htmlFor="contact" className='label'>Contact No.</label><br></br>
                        <input type="number" name="contact" autoComplete='off' id="contact"
                            value={userRegistration.contact} onChange={handleInput}
                            className='textarea'></input>
                    </div>
                    <div className="formitem">
                        <label htmlFor="address" className='label'>Address</label><br></br>
                        <input type="text" name="address" autoComplete='off' id="address"
                            value={userRegistration.address} onChange={handleInput}
                            className='textarea'></input>
                    </div>
                    {/* <div className="formitem">
                        <label htmlFor="dataofbirth" className='label'>Date of Birth</label><br></br>
                        <input type="text" name="dataofbirth" autoComplete='off' id="dataofbirth"
                            value={userRegistration.dataofbirth} onChange={handleInput}
                            className='textarea'></input>
                    </div> */}
                    <div className="formitem">
                        <label htmlFor="dataofbirth" className='label'>Date of Birth</label><br></br>
                        <DatePicker id ="date" selected={selectedDate} onChange={date=>setSelectedDate(date)}></DatePicker>
                    </div>
                    <div className="formitem">
                        
                            <label htmlFor="bloodgroup" className='label'>Blood Group</label><br></br>
                            <select name="bloodgroup" autoComplete='off' id="bloodgroup" onChange={handleInput} className='textarea'>
                                <option value="">--Select BloodGroup</option>
                                <option value={userRegistration.bloodgroup}>A+</option>
                                <option value={userRegistration.bloodgroup}>A-</option>
                                <option value={userRegistration.bloodgroup}>B+</option>
                                <option value={userRegistration.bloodgroup}>B-</option>
                                <option value={userRegistration.bloodgroup}>AB+</option>
                                <option value={userRegistration.bloodgroup}>AB-</option>
                                <option value={userRegistration.bloodgroup}>O+</option>
                                <option value={userRegistration.bloodgroup}>O-</option>
                            </select>
                       

                    </div>
                    <div className="formitem">
                        <label htmlFor="gender" className='label'>Gender:</label><br></br>
                                               
                            <input type="radio" id="genderm" name="gender" value="Male" />Male<br></br>
                            <input type="radio" id="genderf" name="gender" value="Female"/>FeMale<br></br>
                            <input type="radio" id="gendero" name="gender" value="other"/>Other
                    </div>
                    <div className="formitem">

                        <button id="btn" type='submit'>Register</button>
                    </div>
                </form>

            </div>
            <div className="listdata">
                {

                    records.map((curelement) => {
                        return (
                            <>
                                <div className="showdata" key={curelement.id}>
                                    <p>{curelement.fullname}</p>
                                    <p>{curelement.email}</p>
                                    <p>{curelement.contact}</p>
                                    <p>{curelement.bloodgroup}</p>
                                    <p>{curelement.address}</p>
                                    <p>{curelement.gender}</p>
                                    <p>{curelement.dataofbirth}</p>
                                </div>

                            </>
                        )
                    })
                }
            </div>

        </div>
        
        

)
}

export default Donate
