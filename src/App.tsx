import Navigation from './components/Navigation'
import { useState } from 'react'
import AllQuestions from './views/AllQuestions'
import Container from 'react-bootstrap/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./views/Home"
import SignUp from './components/SignUp'
import Login from './components/Login'
import '../index.css'
import UserType from './types/auth'
import AlertMessage from './components/AlertMessage'
import CategoryType from './types/category'

type Props = {}

export default function App({}: Props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<Partial<UserType>|null>(null);
  const [message, setMessage] = useState<string|null>(null);
  const [category, setCategory] = useState<CategoryType|null>(null);

  const logUserIn = (user:Partial<UserType>): void => {
    setIsLoggedIn(true)
    setLoggedInUser(user)
    flashMessage(`${user.username} has been logged in`, 'success')
}

const logUserOut = ():void => {
  setIsLoggedIn(false)
  setLoggedInUser(null)
  flashMessage('You have logged out', 'info')
}




const flashMessage = (newMessage:string|null, newCategory:CategoryType|null):void => {
  setMessage(newMessage);
  setCategory(newCategory);
}


    return (
      <>
      <BrowserRouter>
        
        <Container data-bs-theme="dark">
        <Navigation isLoggedIn={isLoggedIn} handleLogOut={logUserOut}/>
        {message && category &&  <AlertMessage message={message} category={category!} flashMessage={flashMessage}/>}
          <Routes>
              <Route path="/" element={<Home loggedInUser={loggedInUser} />} />
              <Route path="SignUp" element={<SignUp logUserIn={logUserIn} />} />
              <Route path="Login" element={<Login isLoggedIn={isLoggedIn} logUserIn={logUserIn} />} />
              <Route path="AllQuestions" element={<AllQuestions />} />
          </Routes>
          {/* <AllQuestions/> */}
        </Container>
      </BrowserRouter>

      </>
    )
  }


