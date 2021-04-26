import { useEffect, useState } from 'react';
import { read, insert, update, remove } from '../services/apiService';

const Student = ({match, history}) => {
    
    const [id] = useState(match.params.id);
    const [student, setStudent] = useState({
        _id: '0',
        firstName: '',
        lastName: '',
        yearOfBirth: 0,
        address: ''
    });

    useEffect(() => {
        if(id !== '0') {
            read('students', id, data => {
                if(data) setStudent(data);
            });
        }
    }, [id])

    function changeHandler(e) {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    }

    const save = () => {
        if(id === '0') {
            insert('students', student, data => {
                if(data) return history.push('/students');
                console.log("There was an error during save data");
            });
        } else {
            update('students', id, student, data => {
                if(data) return history.push('/students');
                console.log("There was an error during save data");
            });
        }
    }

    const removeStudent = () => {
        remove('students', id, data => {
            history.push('/students');
        })
    }

    return (
        <div className="container">
            <div className="form-container">
                <h2 className="form-title">Student</h2>
                <form className="form-input">
                    <div className="input-field">
                        <label htmlFor="firstName">First Name:</label>
                        <input 
                        type="text" 
                        name="firstName" 
                        value={student.firstName}
                        onChange={changeHandler}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name:</label>
                        <input 
                        type="text" 
                        name="lastName" 
                        value={student.lastName}
                        onChange={changeHandler}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="yearOfBirth">Year of Birth:</label>
                        <input 
                        className="year-input"
                        type="text" 
                        name="yearOfBirth" 
                        value={student.yearOfBirth}
                        onChange={changeHandler}/>
                    </div>
                    <div className="input-field address-field">
                        <label htmlFor="address">Address:</label>
                        <input 
                        className="address-input"
                        type="text" 
                        name="address" 
                        value={student.address}
                        onChange={changeHandler}/>
                    </div>
                    <hr/>
                    <div className="button-container">
                    <div className="left">
                      {id !== '0' && (<button type="button" onClick={removeStudent}>DELETE</button>)}
                        </div>
                    
                        <div className="right">
                            <button type="button" onClick={() => history.push('/students')}>BACK</button>
                            <button type="button" onClick={save}>SAVE</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Student;