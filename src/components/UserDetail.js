import React from 'react'
import { useParams } from 'react-router-dom'



const UserDetail = () => {
  const param =  useParams();
  const userId = param.userId;
  return (
    <>
    <div>Detial about user {userId} </div>
    </>
  )
}

export default UserDetail