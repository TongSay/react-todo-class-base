import React from 'react'
import { useParams } from 'react-router-dom'



const UserDetail = () => {
    
    const {userId} = useParams();
  return (
    <>
    <div>Detial about user {userId} </div>
    </>
  )
}

export default UserDetail