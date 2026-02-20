import React from 'react'

function UserList({ userData, setShowForm }) {
  return (
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-96 text-center transition-all duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Registered Users
          </h2>

          {userData.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                      <img
                          src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                          alt="No Data Found"
                          className="w-24 h-24 mb-4 opacity-60"
                      />
                  </div>
                  <p className="text-gray-500 text-lg font-semibold">
                      No Results Found
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                      No data available at the moment.
                  </p>
              </div>
          ) : (
              userData.map((user, index) => (
                  <div key={index} className="mb-4 border-b pb-3 text-left">
                      <p><strong>First Name:</strong> {user.firstName}</p>
                      <p><strong>Last Name:</strong> {user.lastName}</p>
                      <p><strong>Email:</strong> {user.email}</p>
                  </div>
              ))
          )}

          <button
              onClick={() => setShowForm(true)}
              className="mt-6 m-auto bg-black hover:bg-gray-800 text-white w-12 h-12 rounded-full text-2xl flex items-center justify-center transition-all duration-300"
          >
              +
          </button>
      </div>
  )
}

export default UserList