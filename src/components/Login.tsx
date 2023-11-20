import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UserType from '../types/auth'

type LoginProps = {
    
    isLoggedIn: boolean,
    logUserIn: (user:Partial<UserType>) => void

}

export default function Login({ isLoggedIn, logUserIn}: LoginProps) {
    
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn){
            navigate('/')
        }
    })

    if (isLoggedIn){
        navigate('/')
    }
    
    const [userFormData, setUserFormData] = useState<Partial<UserType>>({username:'', password:''})



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserFormData({...userFormData, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        logUserIn(userFormData)
        navigate('/')
    }
  return (
    <>
    <h1 className="text-center">Login</h1>
    <Card className="mt-3">
        <Card.Body>
            <Form onSubmit={handleFormSubmit}>
               
                <Form.Label htmlFor='username'>username</Form.Label>
                <Form.Control value={userFormData.username} name='username' onChange={handleInputChange}/>

                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control value={userFormData.password} name='password' type='password' onChange={handleInputChange}/>

                
                <Button type='submit' variant='outline-success' className='w-100 mt-3' >Login</Button>
            </Form>
        </Card.Body>
    </Card>

</>
  )
}