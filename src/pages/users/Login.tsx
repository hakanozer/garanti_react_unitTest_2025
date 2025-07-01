import React, { useEffect, useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { getOneComment } from '../../services/commentsService'
import { IComment } from '../../models/IComment'
import { emailValid } from '../../utils/util'
import { allProduct } from '../../services/productService'
import { Product } from '../../models/IProducts'
import { useCounter } from '../../hooks/useCounter'
import { useTheme } from '../../themeContext/ThemeContext'

function Login() {

  const theme = useTheme()

  // custom hooks
  const { count, plus } = useCounter()

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

  const [arr, setArr] = useState<Product[]>([])
  useEffect(() => {
    allProduct().then(res => {
      const dt = res.data
      setArr(dt.data)
    })
  }, [])

  return (
    <>
      <h1>Login</h1>
      <CustomButton onClick={handleClick} />
      <h2>Comment</h2>
      <button onClick={fncLoadComment} className='btn btn-success'>Load Comment</button>
      { comment && <p data-testid="comment">{comment.data.name}</p> }
      { message && <p data-testid="message">{message}</p> }
      <hr/>
      <h4>{theme}</h4>

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
      <hr/>
      <h4>{count}</h4>
      <button onClick={plus} className='btn btn-danger btn-sm'>Plus</button>

      <hr/>
      <div data-testid="allProduct">
        { arr.length === 0 && "Yükleniyor..." }
        { arr.length > 0 &&
          <div className='row'>
            {arr.map((item, index) => 
              <div className="card col-sm-4" key={index} >
                <img src={item.images[0]} className="card-img-top"></img>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">{item.price}</h6>
                  <p className="card-text">{item.category}</p>
                </div>
              </div>
            )}
          </div>
        }
      </div>
    </>
  )
}

export default Login