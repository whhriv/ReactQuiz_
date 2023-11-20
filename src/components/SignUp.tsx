import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UserType from '../types/auth'
import { useNavigate } from 'react-router-dom'



type Props = {
    logUserIn: (user:Partial<UserType>) => void

}

export default function SignUp({ logUserIn }: Props) {

    const navigate = useNavigate()


    const [userFormData, setUserFormData] = useState<Partial<UserType>>(
        {
       
        firstName: '',
        lastName: '',
        email:'',
        username: '',
        password: '',
        confirmPassword: '',
        }
    )

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        // console.log(e.target value={userFormData.name}, e.target.value)
        setUserFormData( {...userFormData, [e.target.name] : e.target.value } )
    }

    const handleFormSubmit = (e:React.FormEvent): void => {
        e.preventDefault()
        logUserIn(userFormData)
        navigate('/')
    }

    const validatePasswords = (password:string, confirmPassword:string): boolean => {
        return password.length>=5 && password === confirmPassword
    }
    
    const validatedForm = validatePasswords(userFormData.password!, userFormData.confirmPassword!)
    console.log(validatedForm)

    return (
        <>
        <h1 className="text-center">Sign Up</h1>
        <Card className="mt-3">
            <Card.Body>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Label htmlFor='firstName'>First Name</Form.Label>
                    <Form.Control value={userFormData.firstName} name='firstName' onChange={handleInputChange}/>

                    <Form.Label htmlFor='lastname'>Last Name</Form.Label>
                    <Form.Control value={userFormData.lastName} name='lastName' onChange={handleInputChange}/>

                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control value={userFormData.email} name='email' type='email'onChange={handleInputChange}/>

                    <Form.Label htmlFor='username'>username</Form.Label>
                    <Form.Control value={userFormData.username} name='username'onChange={handleInputChange}/>

                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control value={userFormData.password} name='password' type='password'onChange={handleInputChange}/>

                    <Form.Label htmlFor='confirmPassword'>confirm Password</Form.Label>
                    <Form.Control value={userFormData.confirmPassword} name='confirmPassword' type='password'onChange={handleInputChange}/>


                    <Button type='submit' variant='outline-success' className='w-100 mt-3' disabled={!validatedForm} >Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>

    </>
  )
}

