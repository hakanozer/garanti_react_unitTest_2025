import React, { useEffect, useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { getOneComment } from '../../services/commentsService'
import { IComment } from '../../models/IComment'
import { emailValid } from '../../utils/util'

function Login() {

  const handleClick = () => {
    console.log('Button clicked!')
  }

  const [comment, setComment] = useState<IComment>()
  const fncLoadComment = async () => {
    const response = await getOneComment(1)
    setComment(response.data)
  }

  const [message, setMessage] = useState<string>('')
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Hello, message from useEffect!')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const userLogin = (evt: React.FormEvent) => {
    evt.preventDefault()
    setError('')
    if (!emailValid(email)) {
      setError('E-mail not valid')
    }else {

    }
  }

  return (
    <>
      <h1>Login</h1>
      <CustomButton onClick={handleClick} />
      <h2>Comment</h2>
      <button onClick={fncLoadComment} className='btn btn-success'>Load Comment</button>
      { comment && <p data-testid="comment">{comment.data.name}</p> }
      { message && <p data-testid="message">{message}</p> }

      <div className='row'>
        <div className='col-sm-4'>
          <h3>User Login</h3>
          <form onSubmit={userLogin}>
            <div className='mb-3'>
              <input onChange={(evt) => setEmail(evt.target.value) } name='email' className='form-control' placeholder='E-Mail'/>
              <p role='alert'>{error}</p>
            </div>
            <button data-testid="loginBtn" className='btn btn-success btn-sm'>Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login