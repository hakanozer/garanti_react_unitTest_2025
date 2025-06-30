import React from 'react'
import CustomButton from '../../components/CustomButton'

function Login() {

  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <>
      <h1>Login</h1>
      <CustomButton onClick={handleClick} />
    </>
  )
}

export default Login