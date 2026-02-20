import React, { useEffect, useState } from "react";
 
import Input from "../components/Input";
import UserList from "../components/UserList";

function FormPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState(false);
    const [emailExists, setEmailExists] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
 
    useEffect(() => {
        const stored = localStorage.getItem("userData");
        if (stored) {
            setUserData(JSON.parse(stored));
        }
    }, []);

   
    const submit = (e) => {
        e.preventDefault();
        setErrors(true);

        const emailCheck = userData.some((u) => u.email === formData.email);
        setEmailExists(emailCheck);

        if (
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.password &&
            formData.confirmPassword &&
            formData.password === formData.confirmPassword &&
            !emailCheck
        ) {
            setLoading(true);

            setTimeout(() => {
                const updated = [...userData, formData];
                setUserData(updated);
                localStorage.setItem("userData", JSON.stringify(updated));

                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });

                setShowForm(false);
                setErrors(false);
                setLoading(false);
            }, 800);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 flex-col gap-8 p-4">

            {!showForm && (
                <UserList userData={userData} setShowForm={setShowForm} />
            )}

            {showForm && (
                <form
                    onSubmit={submit}
                    className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg flex flex-col gap-3"
                >
                    <h2 className="text-2xl font-semibold mb-2">Add User</h2>

                    <Input
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                        }
                    />
                    {errors && !formData.firstName && (
                        <p className="text-red-500 text-sm">First Name required</p>
                    )}

                    <Input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                        }
                    />
                    {errors && !formData.lastName && (
                        <p className="text-red-500 text-sm">Last Name required</p>
                    )}

                    <Input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                    {errors && !formData.email && (
                        <p className="text-red-500 text-sm">Email required</p>
                    )}
                    {emailExists && (
                        <p className="text-red-500 text-sm">Email already exists</p>
                    )}

                    <Input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                        }
                    />
                    {errors && !formData.password && (
                        <p className="text-red-500 text-sm">Password required</p>
                    )}

                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                            setFormData({ ...formData, confirmPassword: e.target.value })
                        }
                    />
                    {errors && !formData.confirmPassword && (
                        <p className="text-red-500 text-sm">Confirm Password required</p>
                    )}
                    {errors &&
                        formData.password !== formData.confirmPassword && (
                            <p className="text-red-500 text-sm">Passwords do not match</p>
                        )}

                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        {loading ? "Saving..." : "Submit"}
                    </button>
                </form>
            )}
        </div>
    );
}

export default FormPage;
