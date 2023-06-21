import { useState } from 'react';
import './myProfile.css';
import { useMe } from '../pages/home';

function MyProfile() {
    const me = useMe();
    const [username, setUsername] = useState(me.username);
    const [firstName, setFirstName] = useState(me.firstName);
    const [lastName, setLastName] = useState(me.lastName);
    const [phone, setPhone] = useState(me.phone);
    const [email, setEmail] = useState(me.email);
    const [readOnly, setReadOnly] = useState(true);

    function submitChanges(event) {
        event.preventDefault();
        setReadOnly(!readOnly)
    }
    return (
        <div className='profile-wrapper'>
            <span className='profile-header'>My Profile</span>
            <form className='profile-container' onSubmit={submitChanges}>
                <input 
                  name='username' 
                  value={username} 
                  readOnly={readOnly}
                  className={`input ${readOnly && 'readonly'}`}
                  placeholder='username'
                  onChange={(e) => setUsername(e.target.value)}  
                />
                <input 
                  name='firstName' 
                  value={firstName} 
                  readOnly={readOnly}
                  className={`input ${readOnly && 'readonly'}`}
                  placeholder='First Name'
                  onChange={(e) => setFirstName(e.target.value)}  
                />
                <input 
                  name='lastName' 
                  value={lastName} 
                  readOnly={readOnly}
                  className={`input ${readOnly && 'readonly'}`}
                  placeholder='Last Name'
                  onChange={(e) => setLastName(e.target.value)}  
                />
                <input 
                  name='phone' 
                  value={phone} 
                  readOnly={readOnly}
                  className={`input ${readOnly && 'readonly'}`}
                  placeholder='Phone Number'
                  onChange={(e) => setPhone(e.target.value)}  
                />
                <input 
                  name='email' 
                  value={email} 
                  readOnly={readOnly}
                  className={`input ${readOnly && 'readonly'}`}
                  placeholder='Email Address'
                  onChange={(e) => setEmail(e.target.value)}  
                />

                <input type='submit' value={readOnly ? 'Edit' : 'Save'} className='form-button' />
            </form>
        </div>
    );
}

export default MyProfile;