import React from 'react'
// ! dynamic routing
const page = async ( {params} : { params : { id : string } } ) => {
  const {id} = await params
  return (
    <div className='text-3xl'>User Id - {id}  </div>
  )
}

export default page