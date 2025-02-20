"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchRoles } from "./actions"



const RolesComponent = () => {
  const dispatch = useDispatch()
  const roles = useSelector((state) => state.client.roles)

  useEffect(() => {
    dispatch(fetchRoles())
  }, [dispatch])

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Roles</h2>
      <ul className="list-disc pl-5">
        {roles.map((role, index) => (
          <li key={index} className="text-gray-700">
            {role.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RolesComponent

