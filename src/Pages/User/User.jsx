import { useEffect, useState } from "react";
import "./User.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editUser, selectAllUsers } from "../../store/userSlice";
import { toggleOpenCreateModal, selectIsOpenCreateModal } from "../../store/createUserSlice";
import CreateUserModal from "../../components/CreateUserModal/CreateUserModal";
import { Button, Input } from "@mui/joy";


export default function User() {

    const data = useSelector(selectAllUsers);
    const isOpen = useSelector(selectIsOpenCreateModal);
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const [editableUser, setEditableUser] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);
    let { userId } = useParams();


    useEffect(() => {
        setUser(data.find(obj => obj.id === userId))
    }, [userId])

    const onEditMode = () => {
        setEditableUser(user);
        setIsEditMode(true);
    }

    const onChangeHandler = (value, prop) => {
        setEditableUser({ ...editableUser, [prop]: value })
    }

    const onSave = () => {
        dispatch(editUser(editableUser));
        setIsEditMode(false);
        setUser(editableUser);
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
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {isEditMode ?
                        <tr>
                            <td>{editableUser.id}</td>
                            <td>
                                <Input
                                    value={editableUser.name}
                                    onChange={(e) => onChangeHandler(e.target.value, 'name')}
                                    variant="soft"
                                    sx={{
                                        '--Input-radius': '0px',
                                        borderBottom: '2px solid',
                                        borderColor: 'neutral.outlinedBorder',
                                        '&:hover': {
                                            borderColor: 'neutral.outlinedHoverBorder',
                                        },
                                        '&::before': {
                                            border: '1px solid var(--Input-focusedHighlight)',
                                            transform: 'scaleX(0)',
                                            left: 0,
                                            right: 0,
                                            bottom: '-2px',
                                            top: 'unset',
                                            transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                                            borderRadius: 0,
                                        },
                                        '&:focus-within::before': {
                                            transform: 'scaleX(1)',
                                        },
                                    }}
                                />
                            </td>
                            <td>
                                <Input
                                    value={editableUser.pass}
                                    onChange={(e) => onChangeHandler(e.target.value, 'pass')}
                                    variant="soft"
                                    sx={{
                                        '--Input-radius': '0px',
                                        borderBottom: '2px solid',
                                        borderColor: 'neutral.outlinedBorder',
                                        '&:hover': {
                                            borderColor: 'neutral.outlinedHoverBorder',
                                        },
                                        '&::before': {
                                            border: '1px solid var(--Input-focusedHighlight)',
                                            transform: 'scaleX(0)',
                                            left: 0,
                                            right: 0,
                                            bottom: '-2px',
                                            top: 'unset',
                                            transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                                            borderRadius: 0,
                                        },
                                        '&:focus-within::before': {
                                            transform: 'scaleX(1)',
                                        },
                                    }}
                                />
                            </td>
                            <td>
                                <Input
                                    value={editableUser.email}
                                    onChange={(e) => onChangeHandler(e.target.value, 'email')}
                                    variant="soft"
                                    sx={{
                                        '--Input-radius': '0px',
                                        borderBottom: '2px solid',
                                        borderColor: 'neutral.outlinedBorder',
                                        '&:hover': {
                                            borderColor: 'neutral.outlinedHoverBorder',
                                        },
                                        '&::before': {
                                            border: '1px solid var(--Input-focusedHighlight)',
                                            transform: 'scaleX(0)',
                                            left: 0,
                                            right: 0,
                                            bottom: '-2px',
                                            top: 'unset',
                                            transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                                            borderRadius: 0,
                                        },
                                        '&:focus-within::before': {
                                            transform: 'scaleX(1)',
                                        },
                                    }}
                                />
                            </td>
                            <td className="btns-group">
                                <Button size="sm" color="success" onClick={onSave}>Save</Button>
                                <Button size="sm" color="danger" onClick={() => setIsEditMode(false)}>X</Button>
                            </td>
                        </tr> :
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.pass}</td>
                            <td>{user.email}</td>
                            <td><button onClick={onEditMode} id="editUserBtn">Edit user</button></td>
                        </tr>
                    }
                </tbody>
            </table>
            <div className="nav-block">
                <button onClick={() => dispatch(toggleOpenCreateModal())}>Create a new User</button>
                <button><Link to="/users">View all users</Link></button>
            </div>

            {isOpen && <CreateUserModal />}
        </div>
    )
}