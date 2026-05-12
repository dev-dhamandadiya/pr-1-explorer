import React, { useEffect } from 'react'

const Children = () => {
    useEffect(()=>{
        console.log("Componenet Mount");
        return()=>{
            alert('Helloooooooo..!')
            console.log('Component Unmount...');
            
        }
    },[])
  return (
    <>
      <h2>Hello from children</h2>
    </>
  )
}

export default Children