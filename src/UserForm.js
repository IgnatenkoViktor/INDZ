import React from 'react';
import { connect } from 'react-redux';
import './UserForm.css'
const UserForm = ({
    name,
    lastName,
    age,
    savedUserData,
    updateName,
    updateLastName,
    updateAge,
    saveUserData,
}) => {
const handleNameChange = (e) => {
  updateName(e.target.value);
};

const handleLastNameChange = (e) => {
  updateLastName(e.target.value);
};

const handleAgeChange = (e) => {
  updateAge(e.target.value);
};

const handleSave = () => {
  const userData = {
    name,
    lastName,
    age,
  };

  saveUserData(userData);
};

return (
    <div className="user-form-container">
      <div className="input-group input_name">
        <label>First Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div className="input-group">
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </div>
      <div className="input-group input_age">
        <label>Age:</label>
        <input type="text" value={age} onChange={handleAgeChange} />
      </div>
      <div className="input-group">
        <button onClick={handleSave}>Save</button>
      </div>
      <div className="saved-users">
        {savedUserData.map((user, index) => (
          <div className="saved-users-group" key={index}>
            <p className='line'>{user.name}</p>
            <p className='line'>{user.lastName}</p>
            <p>{user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
    ...state.user,
  });
  
  const mapDispatchToProps = {
    updateName: (name) => ({ type: 'UPDATE_NAME', payload: name }),
    updateLastName: (lastName) => ({ type: 'UPDATE_LAST_NAME', payload: lastName }),
    updateAge: (age) => ({ type: 'UPDATE_AGE', payload: age }),
    saveUserData: (userData) => ({ type: 'SAVE_USER_DATA', payload: userData }),
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserForm);