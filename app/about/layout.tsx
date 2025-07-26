import React from 'react'

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='text-3xl text-center'>ROOT LAYOUT
    {children}
    </div>
  )
}

export default layout