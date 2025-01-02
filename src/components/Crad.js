import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getuserData } from '../redux/Action';

const Crad = () => {
    const [count, setCount] = useState({
        firstName: "",
        lastName: "",
        Country: "",
        language: "",
        vehicle: []
    });

    const [userData, setData] = useState([])
    const [userEditindex, setEditindex] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const params = useParams()

    const tableData = useSelector((state) => state?.data) || []
    const editData = useSelector((state) => state?.editObj) || {
        firstName: "",
        lastName: "",
        Country: "",
        language: "",
        vehicle: []
    }

    useEffect(() => {
        setData(tableData)
        if (params?.id) {
            setCount(editData)
            setEditindex(params?.id)
        }
    }, [])

    const handleChange = (e) => {
        setCount({
            ...count, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        const arr = [...userData];
        if (userEditindex !== null) {
            arr[userEditindex] = count;
        } else {
            arr.push(count);
        }
        dispatch(getuserData(arr))
        setData(arr)
        setEditindex(null);
        handleReset();
    }

    const handleCheckbox = (e) => {
        const checkArr = [...count.vehicle];
        if (e.target.checked) {
            checkArr.push(e.target.value);
        } else {
            const removeIndex = checkArr.indexOf(e.target.value);
            checkArr.splice(removeIndex, 1);
        }
        setCount({
            ...count, vehicle: checkArr
        })
    }

    const handleReset = () => {
        setCount({
            firstName: "",
            lastName: "",
            Country: "",
            language: "",
            vehicle: []
        })
    }

    return (
        <div>
            <div className="container">
                <h2>Contact Form</h2>
                <form action="#">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstName" value={count.firstName} onChange={(e) => handleChange(e)} placeholder="Your first name.." /><br /><br />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastName" value={count.lastName} onChange={(e) => handleChange(e)} placeholder="Your last name.." /><br /><br />

                    <label htmlFor="country">Country</label>
                    <select id="country" name="Country" value={count.Country} onChange={(e) => handleChange(e)} >
                        <option value="">Select your country</option>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                    <br /><br />

                    <p>Please select your favorite Web language:</p>
                    <input type="radio" id="html" name="language" value="HTML" checked={count.language === "HTML"} onChange={(e) => handleChange(e)} />
                    <label htmlFor="html">HTML</label><br />
                    <input type="radio" id="css" name="language" value="CSS" checked={count.language === "CSS"} onChange={(e) => handleChange(e)} />
                    <label htmlFor="css">CSS</label><br />
                    <input type="radio" id="javascript" name="language" value="JavaScript" checked={count.language === "JavaScript"} onChange={(e) => handleChange(e)} />
                    <label htmlFor="javascript">JavaScript</label>
                    <br /><br />

                    <p>Please select your favorite vehicle:</p>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked={count.vehicle.includes("Bike")} onChange={(e) => handleCheckbox(e)} />
                    <label htmlFor="vehicle1"> I have a bike</label><br />
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" checked={count.vehicle.includes("Car")} onChange={(e) => handleCheckbox(e)} />
                    <label htmlFor="vehicle2"> I have a car</label><br />
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" checked={count.vehicle.includes("Boat")} onChange={(e) => handleCheckbox(e)} />
                    <label htmlFor="vehicle3"> I have a boat</label><br /><br />

                    <button type="button" onClick={() => handleSubmit()}>Submit</button>
                    <button type="button" onClick={() => navigate("/table")} style={{ marginInline: "8px" }}> Go To Table</button>
                </form>
            </div>
        </div>
    )
}

export default Crad;
