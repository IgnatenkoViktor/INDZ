import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import UserForm from './UserForm';
import './App.css'

const initialState = {
  user: {
    name: '',
    lastName: '',
    age: '',
    savedUserData: [],
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, user: { ...state.user, name: action.payload } };
    case 'UPDATE_LAST_NAME':
      return { ...state, user: { ...state.user, lastName: action.payload } };
    case 'UPDATE_AGE':
      return { ...state, user: { ...state.user, age: action.payload } };
    case 'SAVE_USER_DATA':
      return {
        ...state,
        user: {
          name: '',
          lastName: '',
          age: '',
          savedUserData: [...state.user.savedUserData, action.payload],
        },
      };
    default:
      return state;
  }
};

const store = createStore(userReducer);

const App = () => {
    return (
      <Provider store={store}>
        <div className="user-form-container">
          <UserForm />
        </div>
      </Provider>
    );
  };

export default App;
