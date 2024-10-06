import React, { useState, useEffect } from 'react';
import { addTeacher, removeTeacher, getTeachers } from '../api/authApi'; // Assuming these functions exist in authapi.js
import './admin.css'
const AdminPage = () => {
    const [teachers, setTeachers] = useState([]);
    const [newTeacher, setNewTeacher] = useState('');

    useEffect(() => {
        const fetchTeachers = async () => {
            const teacherList = await getTeachers();
            setTeachers(teacherList);
        };
        fetchTeachers();
    }, []);

    const handleAddTeacher = async () => {
        if (newTeacher) {
            await addTeacher(newTeacher);
            setNewTeacher('');
            const updatedTeachers = await getTeachers(); // Refresh the teacher list
            setTeachers(updatedTeachers);
        }
    };

    const handleRemoveTeacher = async (teacherId) => {
        await removeTeacher(teacherId);
        const updatedTeachers = await getTeachers(); // Refresh the teacher list
        setTeachers(updatedTeachers);
    };

    return (
        <div className="admin-page">
            <h1>Admin Page</h1>
            <h2>Add Teacher</h2>
            <input 
                type="text" 
                value={newTeacher} 
                onChange={(e) => setNewTeacher(e.target.value)} 
                placeholder="Enter teacher's name"
            />
            <button onClick={handleAddTeacher}>Add Teacher</button>

            <h2>Manage Teachers</h2>
            <ul>
                {teachers.map((teacher) => (
                    <li key={teacher.id}>
                        {teacher.name}
                        <button onClick={() => handleRemoveTeacher(teacher.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPage;
