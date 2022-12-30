import React from 'react'
import { Outlet } from 'react-router-dom'
const Users = () => {
  return (
    <>
     <h2>User 1</h2>
     <h2>User 2</h2>
     <h2>User 2</h2>
     <Outlet />
    </>
  )
}

export default Users