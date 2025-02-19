"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import axios from "axios"

// Create Axios instance
const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
})

function SignupPage() {
  const [roles, setRoles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const history = useHistory()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role_id: "1", // Default to Customer
    },
  })

  const selectedRole = watch("role_id")

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get("/roles")
        setRoles(response.data)
      } catch (error) {
        console.error("Error fetching roles:", error)
        setError("Failed to fetch roles. Please try again later.")
      }
    }

    fetchRoles()
  }, [])

  const onSubmit = async (data) => {
    setIsLoading(true)
    setError(null)

    try {
      await api.post("/signup", data)
      history.goBack()
      alert("You need to click the link in your email to activate your account!")
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.message || "An error occurred during signup.")
      } else {
        setError("An unexpected error occurred. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Name must be at least 3 characters" },
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters" },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
                message: "Password must include numbers, lowercase, uppercase, and special characters",
              },
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            id="role"
            {...register("role_id")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {selectedRole === "2" && (
          <>
            <div>
              <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">
                Store Name
              </label>
              <input
                id="storeName"
                {...register("store.name", {
                  required: "Store name is required",
                  minLength: { value: 3, message: "Store name must be at least 3 characters" },
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.store?.name && <p className="text-red-500 text-sm mt-1">{errors.store.name.message}</p>}
            </div>

            <div>
              <label htmlFor="storePhone" className="block text-sm font-medium text-gray-700">
                Store Phone
              </label>
              <input
                id="storePhone"
                {...register("store.phone", {
                  required: "Store phone is required",
                  pattern: {
                    value: /^\+90[0-9]{10}$/,
                    message: "Invalid Turkish phone number format",
                  },
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.store?.phone && <p className="text-red-500 text-sm mt-1">{errors.store.phone.message}</p>}
            </div>

            <div>
              <label htmlFor="storeTaxId" className="block text-sm font-medium text-gray-700">
                Store Tax ID
              </label>
              <input
                id="storeTaxId"
                {...register("store.tax_no", {
                  required: "Store Tax ID is required",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: "Invalid Tax ID format (TXXXXVXXXXXX)",
                  },
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.store?.tax_no && <p className="text-red-500 text-sm mt-1">{errors.store.tax_no.message}</p>}
            </div>

            <div>
              <label htmlFor="storeBankAccount" className="block text-sm font-medium text-gray-700">
                Store Bank Account (IBAN)
              </label>
              <input
                id="storeBankAccount"
                {...register("store.bank_account", {
                  required: "Store Bank Account is required",
                  pattern: {
                    value: /^TR\d{24}$/,
                    message: "Invalid IBAN format",
                  },
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.store?.bank_account && (
                <p className="text-red-500 text-sm mt-1">{errors.store.bank_account.message}</p>
              )}
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Signing up...
            </>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
      <div className="mt-4 text-center">
        <a href="/login" className="text-sm text-indigo-600 hover:text-indigo-500">
          Already have an account? Log in
        </a>
      </div>
    </div>
  )
}

export default SignupPage

