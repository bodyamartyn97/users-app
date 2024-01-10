import { useDispatch } from 'react-redux';
import './CreateUserModal.css';
import { toggleOpenCreateModal } from '../../store/createUserSlice';
import { useState } from 'react';
import { addUser } from '../../store/userSlice';
import { Input, Button } from '@mui/joy';

export default function CreateUserModal() {

    const dispatch = useDispatch();
    const [user, setUser] = useState({});

    const onChangeHandler = (value, prop) => {
        setUser({ ...user, [prop]: value })
    }

    const onAddUser = () => {
        dispatch(addUser(user));
        dispatch(toggleOpenCreateModal());
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <i onClick={() => dispatch(toggleOpenCreateModal())} className='close'>X</i>
                <div className="input-group">
                    <label>Name</label>
                    <Input
                        value={user.name}
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
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <Input
                        value={user.pass}
                        onChange={(e) => onChangeHandler(e.target.value, 'pass')}
                        type="password"
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
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <Input
                        value={user.email}
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
                </div>
                <div className="btnSub">
                    <Button onClick={onAddUser}
                        disabled={(!user.email || !user.name || !user.pass)} size="md" color="primary">
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}