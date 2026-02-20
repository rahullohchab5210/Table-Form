import React from 'react'

function UserForm({ clickHandler, formDetails, setFormDetails, error, emailExistsError, showPassword, setShowPassword, loading }) {
  return (
      <form
          onSubmit={clickHandler}
          className="bg-white p-8 rounded-2xl shadow-2xl w-96 flex flex-col gap-4 animate-fadeIn"
      >
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">
              Registration Form
          </h2>

          <input
              type="text"
              placeholder="First Name"
              value={formDetails.firstName}
              onChange={(e) =>
                  setFormDetails({ ...formDetails, firstName: e.target.value })
              }
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          {error && !formDetails.firstName && (
              <p className="text-red-500 text-sm">First name is required</p>
          )}

          <input
              type="text"
              placeholder="Last Name"
              value={formDetails.lastName}
              onChange={(e) =>
                  setFormDetails({ ...formDetails, lastName: e.target.value })
              }
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          {error && !formDetails.lastName && (
              <p className="text-red-500 text-sm">Last name is required</p>
          )}

          <input
              type="email"
              placeholder="Email"
              value={formDetails.email}
              onChange={(e) =>
                  setFormDetails({ ...formDetails, email: e.target.value })
              }
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          {error && !formDetails.email && (
              <p className="text-red-500 text-sm">Email is required</p>
          )}
          {emailExistsError && (
              <p className="text-red-500 text-sm mt-1">Email already exists</p>
          )}

          <div className="relative">
              <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formDetails.password}
                  onChange={(e) =>
                      setFormDetails({ ...formDetails, password: e.target.value })
                  }
                  className="border p-3 rounded-lg w-full pr-16 focus:outline-none focus:ring-2 focus:ring-black transition"
              />

              <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-blue-600 text-sm font-medium"
              >
                  {showPassword ? "Hide" : "Show"}
              </button>
          </div>
          {error && !formDetails.password && (
              <p className="text-red-500 text-sm">Password is required</p>
          )}

          <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={formDetails.confirmPassword}
              onChange={(e) =>
                  setFormDetails({
                      ...formDetails,
                      confirmPassword: e.target.value,
                  })
              }
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          {error && !formDetails.confirmPassword && (
              <p className="text-red-500 text-sm">Confirm password is required</p>
          )}
          {error &&
              formDetails.confirmPassword &&
              formDetails.password !== formDetails.confirmPassword && (
                  <p className="text-red-500 text-sm">Passwords do not match</p>
              )}

          <button
              type="submit"
              disabled={loading}
              className={`py-2 rounded mt-2 text-white transition-all duration-300 ${loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-black hover:bg-gray-800"
                  }`}
          >
              {loading ? (
                  <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submiting...
                  </div>
              ) : (
                  "Submit"
              )}
          </button>
      </form>
  )
}

export default UserForm