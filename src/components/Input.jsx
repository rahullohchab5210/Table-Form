import React from 'react'

function Input({ type, name, placeholder, value, onChange }) {
  return (
      <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full border p-2 rounded-md"
      />
  )
}

export default Input








































// const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//       else if (!strictEmailRegex.test(values.email)) errors.email = 'Invalid Email format!';






    // const validate = (values) => {
    //     const errors = {};


    //     if (!values.firstName) errors.firstName = 'Missing First Name!';
    //     if (!values.lastName) errors.lastName = 'Missing Last Name!';

    //     if (!values.email) errors.email = 'Missing Email!';
   

    //     if (!values.password) errors.password = 'Missing Password!';
    //     if (!values.confirmPassword) errors.confirmPassword = 'Missing Confirm Password!';
    //     else if (values.password !== values.confirmPassword) errors.confirmPassword = 'Passwords do not match!';

    //     return errors;
    // };