import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

import "./Form.css";
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../../store/userSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../store/authSlice';

export default function Form() {

    const users = useSelector(selectAllUsers);
    let navigate = useNavigate();
    const [user, setUser] = useState({ name: '', pass: '', email: '' });
    const dispatch = useDispatch();

    const onChangeHandler = (value, prop) => {
        setUser({ ...user, [prop]: value })
    }

    const onLogIn = () => {
        let currentUser = users.find(obj => obj.name === user.name && obj.pass === user.pass && obj.email === user.email);
        if (currentUser) {
            dispatch(logIn(user));
            navigate('/users');
        }
    }

    return (
        <div className="container">
            <form >
                <div className="inp-field">
                    <label>Name</label>
                    <Input
                        variant="outlined"
                        color="primary"
                        onChange={(e) => onChangeHandler(e.target.value, 'name')}
                        value={user.name}
                    />
                </div>
                <div className="inp-field">
                    <label >Password</label>
                    <Input
                        variant="outlined"
                        color="primary"
                        type="password"
                        onChange={(e) => onChangeHandler(e.target.value, 'pass')}
                        value={user.pass}
                    />
                </div>
                <div className="inp-field">
                    <label >Email</label>
                    <Input
                        variant="outlined"
                        color="primary"
                        type="email"
                        onChange={(e) => onChangeHandler(e.target.value, 'email')}
                        value={user.email}
                    />
                </div>
                <div className="btn-submit">
                    <Button onClick={onLogIn}>Submit</Button>
                </div>
            </form>
        </div>
    )
}