import React, { useContext } from 'react'
import { UserDataContext } from '../../context/Usercontext'

const Sections = () => {
  const data = useContext(UserDataContext);
  console.log(data)
  return (
    <div className='p-4 text-xl'>
      Sections
    </div>
  )
}

export default Sections
