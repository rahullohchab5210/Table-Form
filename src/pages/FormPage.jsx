import React, { useEffect, useState } from 'react'
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

function FormPage() {

    const [formDetails, setFormDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setErrors] = useState(false);
    const [userData, setUserData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [emailExistsError, setEmailExistsError] = useState(false);

    useEffect(() => {
        const storedUsers = localStorage.getItem("userData");
        if (storedUsers) {
            const parsed = JSON.parse(storedUsers);
            setUserData(Array.isArray(parsed) ? parsed : [parsed]);
        }
    }, []);

    const clickHandler = (e) => {
        e.preventDefault();
        setErrors(true);

        const emailExists = userData.some(
            (user) => user.email === formDetails.email
        );

        setEmailExistsError(emailExists);

        if (
            formDetails.firstName &&
            formDetails.lastName &&
            formDetails.email &&
            formDetails.password &&
            formDetails.confirmPassword &&
            formDetails.password === formDetails.confirmPassword &&
            !emailExists
        ) {
            setLoading(true);

            setTimeout(() => {
                const updatedUsers = [...userData, { ...formDetails }];

                setUserData(updatedUsers);
                localStorage.setItem("userData", JSON.stringify(updatedUsers));

                setFormDetails({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });

                setShowForm(false);
                setErrors(false);
                setShowPassword(false);
                setLoading(false);
            }, 1000);
        }
    };

  return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-300 flex-col gap-8">
          {!showForm && (
              <UserList userData={userData} setShowForm={setShowForm} />
          )}

          {showForm && (
              <UserForm
                  formDetails={formDetails}
                  setFormDetails={setFormDetails}
                  error={error}
                  emailExistsError={emailExistsError}
                  loading={loading}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  clickHandler={clickHandler}
              />
          )}
      </div>
  )
}

export default FormPage