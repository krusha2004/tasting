import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userDelete, editUserEdit } from '../redux/Action';

const TableData = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const tableData = useSelector((state) => state?.data) || []

    const handleDelete = (index) => {
        dispatch(userDelete(index))

    };

    const handleEdit = (index) => {
        navigate(`/edit/${index}`)
        dispatch(editUserEdit(index))
    };

    return (
        <div>
            <button type="button" onClick={() => navigate("/")} style={{ margin: "8px" }}>Go To Form</button>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Country</th>
                        <th>Language</th>
                        <th>Vehicle</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.Country}</td>
                            <td>{item.language}</td>
                            <td>{item.vehicle}</td>
                            <td>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableData;
