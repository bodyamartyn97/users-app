import Button from "@mui/joy/Button";
import "./Users.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../../store/userSlice";
import { useState } from "react";
import RemoveUserModal from "../../components/RemoveUserModal/RemoveUserModal";
import CreateUserModal from "../../components/CreateUserModal/CreateUserModal";
import { selectIsOpenCreateModal, toggleOpenCreateModal } from "../../store/createUserSlice";
import { Link } from "react-router-dom";
import { logIn, logOut } from "../../store/authSlice";


export default function Users() {

    const data = useSelector(selectAllUsers);
    const isOpenCreateUser = useSelector(selectIsOpenCreateModal)
    const dispatch = useDispatch();
    const [userId, setUserId] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const onDeleteUser = (id) => {
        setIsOpen(true);
        setUserId(id);
    }

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Profile</th>
                        <th>Destroy</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(obj => {
                        return (
                            <tr key={obj.id}>
                                <td>{obj.id[0]}...</td>
                                <td>{obj.name}</td>
                                <td>{obj.pass}</td>
                                <td>{obj.email}</td>
                                <td><Link to={`/users/${obj.id}`}>view profile</Link></td>
                                <td><Button onClick={() => onDeleteUser(obj.id)} size="sm" color="danger">X</Button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            <div className="nav-block">
                <button onClick={() => dispatch(toggleOpenCreateModal())}>Create a new User</button>
                <button onClick={() => dispatch(logOut())}>LogOut</button>
            </div>
            {isOpen && <RemoveUserModal setIsOpen={setIsOpen} userId={userId} />}
            {isOpenCreateUser && <CreateUserModal />}
        </div>
    )
}